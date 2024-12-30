import Vue from 'vue';
export default Vue.extend({
    data() {
        const gridOptions = {
            border: true,
            headerCellStyle({ column }) {
                if (column.field === 'name') {
                    return {
                        backgroundColor: '#f60',
                        color: '#ffffff'
                    };
                }
            },
            rowStyle({ rowIndex }) {
                if ([2, 3, 5].includes(rowIndex)) {
                    return {
                        backgroundColor: 'red',
                        color: '#ffffff'
                    };
                }
            },
            cellStyle({ row, column }) {
                if (column.field === 'sex') {
                    if (row.sex >= '1') {
                        return {
                            backgroundColor: '#187'
                        };
                    }
                    else if (row.age === 26) {
                        return {
                            backgroundColor: '#2db7f5'
                        };
                    }
                }
            },
            columns: [
                { type: 'seq', width: 70 },
                { field: 'name', title: 'Name' },
                { field: 'sex', title: 'Sex' },
                { field: 'age', title: 'Age' },
                { field: 'address', title: 'Address', showOverflow: true }
            ],
            data: [
                { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
                { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
                { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
                { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
            ]
        };
        return {
            gridOptions
        };
    }
});
