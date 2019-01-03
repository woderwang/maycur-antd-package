import * as React from 'react';
import * as PropTypes from 'prop-types';
import { Store } from './createStore';
import Column from './Column';
import ColumnGroup from './ColumnGroup';
import { SpinProps } from '../spin';
import { TableProps, TableSize, TableState, TableComponents, TableLocale, ColumnProps, TableStateFilters, SelectionItemSelectFn, SelectionInfo, PrepareParamsArgumentsReturn } from './interface';
import { RadioChangeEvent } from '../radio';
import { CheckboxChangeEvent } from '../checkbox';
import './style/rcTable.less';
export default class Table<T> extends React.Component<TableProps<T>, TableState<T>> {
    static Column: typeof Column;
    static ColumnGroup: typeof ColumnGroup;
    static propTypes: {
        dataSource: PropTypes.Requireable<any[]>;
        columns: PropTypes.Requireable<any[]>;
        prefixCls: PropTypes.Requireable<string>;
        useFixedHeader: PropTypes.Requireable<boolean>;
        rowSelection: PropTypes.Requireable<object>;
        className: PropTypes.Requireable<string>;
        size: PropTypes.Requireable<string>;
        loading: PropTypes.Requireable<boolean | object>;
        bordered: PropTypes.Requireable<boolean>;
        onChange: PropTypes.Requireable<(...args: any[]) => any>;
        locale: PropTypes.Requireable<object>;
        dropdownPrefixCls: PropTypes.Requireable<string>;
    };
    static defaultProps: {
        dataSource: never[];
        prefixCls: string;
        useFixedHeader: boolean;
        className: string;
        size: TableSize;
        loading: boolean;
        bordered: boolean;
        indentSize: number;
        locale: {};
        rowKey: string;
        showHeader: boolean;
    };
    CheckboxPropsCache: {
        [key: string]: any;
    };
    store: Store;
    columns: ColumnProps<T>[];
    components: TableComponents;
    row: React.ComponentType<any>;
    constructor(props: TableProps<T>);
    getCheckboxPropsByItem: (item: T, index: number) => any;
    getDefaultSelection(): any[];
    getDefaultPagination(props: TableProps<T>): {};
    componentWillReceiveProps(nextProps: TableProps<T>): void;
    onRow: (record: T, index: number) => any;
    setSelectedRowKeys(selectedRowKeys: string[], selectionInfo: SelectionInfo<T>): void;
    hasPagination(props?: any): boolean;
    isFiltersChanged(filters: TableStateFilters): boolean;
    getSortOrderColumns(columns?: ColumnProps<T>[]): any;
    getFilteredValueColumns(columns?: ColumnProps<T>[]): any;
    getFiltersFromColumns(columns?: ColumnProps<T>[]): any;
    getDefaultSortOrder(columns?: ColumnProps<T>[]): {
        sortColumn: any;
        sortOrder: any;
    };
    getSortStateFromColumns(columns?: ColumnProps<T>[]): {
        sortColumn: any;
        sortOrder: any;
    };
    getSorterFn(state: TableState<T>): ((a: T, b: T) => number) | undefined;
    isSameColumn(a: ColumnProps<T> | null, b: ColumnProps<T> | null): any;
    toggleSortOrder(column: ColumnProps<T>): void;
    handleFilter: (column: ColumnProps<T>, nextFilters: string[]) => void;
    handleSelect: (record: T, rowIndex: number, e: CheckboxChangeEvent) => void;
    handleRadioSelect: (record: T, rowIndex: number, e: RadioChangeEvent) => void;
    handleSelectRow: (selectionKey: string, index: number, onSelectFunc: SelectionItemSelectFn) => any;
    handlePageChange: (current: number, ...otherArguments: any[]) => void;
    renderSelectionBox: (type: "checkbox" | "radio" | undefined) => (_: any, record: T, index: number) => JSX.Element;
    getRecordKey: (record: T, index: number) => any;
    getPopupContainer: () => HTMLElement;
    renderRowSelection(locale: TableLocale): ColumnProps<T>[];
    getColumnKey(column: ColumnProps<T>, index?: number): string | number | undefined;
    getMaxCurrent(total: number): number | undefined;
    isSortColumn(column: ColumnProps<T>): boolean;
    renderColumnsDropdown(columns: ColumnProps<T>[], locale: TableLocale): any[];
    renderColumnTitle(title: ColumnProps<T>['title']): React.ReactNode;
    handleShowSizeChange: (current: number, pageSize: number) => void;
    renderPagination(paginationPosition: string): JSX.Element | null;
    prepareParamsArguments(state: any): PrepareParamsArgumentsReturn<T>;
    findColumn(myKey: string | number): undefined;
    getCurrentPageData(): T[];
    getFlatData(): any[];
    getFlatCurrentPageData(): any[];
    recursiveSort(data: T[], sorterFn: (a: any, b: any) => number): T[];
    getLocalData(state?: TableState<T>): T[];
    createComponents(components?: TableComponents, prevComponents?: TableComponents): void;
    renderTable: (contextLocale: TableLocale, loading: SpinProps) => JSX.Element;
    render(): JSX.Element;
}
