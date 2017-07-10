import {
    Component,
    Input,
    Output,
    EventEmitter,
    ApplicationRef,
    ChangeDetectionStrategy,
    AfterViewChecked,
    OnChanges
} from "@angular/core";
import { TableData, Data, CriteriaSelection } from "./../../comparison/shared/index";
import { ComparisonCitationService } from "./../../comparison/components/comparison-citation.service";
import { ComparisonConfigService } from "../../comparison/components/comparison-config.service";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";

declare let anchors;

@Component({
    selector: 'generictable',
    templateUrl: './generic-table.component.html',
    styleUrls: ['./generic-table.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GenericTableComponent implements AfterViewChecked, OnChanges {
    private counter: number = 0;
    private table;

    @Input() display: boolean = false;
    @Input() settings: boolean = false;
    @Input() columns: Array<TableData> = new Array<TableData>();

    @Input() data: Array<Data> = new Array<Data>();
    @Input() query: { [name: string]: CriteriaSelection; } = {};
    @Input() displayTemplate: boolean = false;

    @Input() citationServ: ComparisonCitationService;

    @Output() settingsCallback: EventEmitter<any> = new EventEmitter();
    @Output() showDetails: EventEmitter<any> = new EventEmitter();

    @Input() changeNum: number = 0;

    @Input() order: Array<String> = new Array<String>();
    @Output() orderChange: EventEmitter<any> = new EventEmitter();
    @Input() orderOption: Array<number> = new Array<number>();
    @Output() orderOptionChange: EventEmitter<any> = new EventEmitter();

    private ctrlCounter: number = 0;

    constructor(private ar: ApplicationRef,
                private confServ: ComparisonConfigService,
                private sanitization: DomSanitizer) {
    }

    private orderClick(e: MouseEvent, value: string) {
        let pos: number = this.order.findIndex(name => name == value);
        if (e.ctrlKey) {
            this.ctrlCounter = this.order[this.ctrlCounter] == value ? this.ctrlCounter : this.ctrlCounter + 1;
        } else {
            this.ctrlCounter = 0;
        }
        if (typeof pos != 'undefined' && pos >= 0) {
            this.order[this.ctrlCounter] = value;
            this.orderOption[this.ctrlCounter] = this.orderOption[pos] == 1 ? -1 : 1;
            this.orderOption[pos] = pos != this.ctrlCounter ? 0 : this.orderOption[this.ctrlCounter];
        } else {
            this.order[this.ctrlCounter] = value;
            this.orderOption[this.ctrlCounter] = 1;
        }
        if (this.ctrlCounter == 0) {
            for (let i = 1; i < this.orderOption.length; i++) {
                this.orderOption[i] = 0;
            }
        }
        this.orderChange.emit(this.order);
        this.orderOptionChange.emit(this.orderOption);
        this.table.trigger('reflow');
    }

    private displayOrder(value: string, option: number): boolean {
        if (this.order.length === 0 && this.orderOption.length === 0) {
            this.order[this.ctrlCounter] = "tag";
            this.orderOption[this.ctrlCounter] = 1;
        }
        return this.order.findIndex(val => val == value) >= 0 && this.orderOption[this.order.findIndex(val => val == value)] == option;
    }

    ngAfterViewChecked(): void {
        this.table = (<any>$("table.table.table-hover"));
        this.table.floatThead();
        anchors.options = {
            placement: 'right'
        };
        anchors.add('.anchored');
    }

    ngOnChanges(): void {
        this.update();
    }

    public update(): void {
        if (this.table != null) {
            this.table.trigger('reflow');
        }
    }

    public shouldBeShown(data: Data) {
        if (this.confServ.comparison && this.confServ.comparison.displayall) {
            return true;
        }
        let val = true;
        for (let column of this.confServ.tableDataSet.getTableDataArray()) {
            if (column.display && data.properties[column.tag] != null && data.properties[column.tag].plain != "") {
                return true;
            }
            if (column.display && data.properties[column.tag] != null) {
                val = false;
            }
        }
        return val;
    }

    public getColor(column: TableData, label: string): SafeHtml {
        return this.sanitization.bypassSecurityTrustStyle(column.type.colors.getColor(label));
    }

    public getColoredShadow(column: TableData, label: string): SafeHtml {
        let dcolor = this.getTintedColor(column.type.colors.getColor(label), -100);
        return this.sanitization.bypassSecurityTrustStyle('-1px -1px 1px' + dcolor
            + ', 1px -1px 1px' + dcolor
            + ', -1px 1px 1px' + dcolor
            + ', 1px 1px 1px' + dcolor
            + ', 1px 0px 1px' + dcolor
            + ', 0px 1px ' + dcolor
            + ', -1px 0px 1px' + dcolor
            + ', 0px -1px 1px ' + dcolor);
    }

    private getTintedColor(color, v) {
        if (color.length > 6) {
            color = color.substring(1, color.length)
        }
        let rgb = parseInt(color, 16);

        let rNum = Math.abs(((rgb >> 16) & 0xFF) + v);
        if (rNum > 255) {
            rNum = rNum - (rNum - 255)
        }

        let gNum = Math.abs(((rgb >> 8) & 0xFF) + v);
        if (gNum > 255) {
            gNum = gNum - (gNum - 255)
        }

        let bNum = Math.abs((rgb & 0xFF) + v);
        if (bNum > 255) {
            bNum = bNum - (bNum - 255)
        }

        let r = Number(rNum < 0 || isNaN(rNum)) ? '0' : ((rNum > 255) ? 255 : rNum).toString(16);
        if (r.length == 1) {
            r = '0' + rNum
        }

        let g = Number(gNum < 0 || isNaN(gNum)) ? '0' : ((gNum > 255) ? 255 : gNum).toString(16);
        if (g.length == 1) {
            g = '0' + g
        }

        let b = Number(bNum < 0 || isNaN(bNum)) ? '0' : ((bNum > 255) ? 255 : bNum).toString(16);
        if (b.length == 1) b = '0' + b;

        return "#" + r + g + b;
    }
}