import * as React from "react";
import * as ReactDOM from "react-dom";
import { Select2, Select2Option, Select2Data, Select2Group } from "../../dist/react";
import { data1, data2, data3, data5 } from "../common";

const CustomOption: React.StatelessComponent<{ option: Select2Option }> = props => <span>{props.option.label}<span style={{ float: "right", color: "red" }}>{props.option.value}</span></span>;
const data8: Select2Data = JSON.parse(JSON.stringify(data1));

for (const groupOrOption of data8) {
    const options = (groupOrOption as Select2Group).options;
    if (options) {
        for (const option of options) {
            option.component = CustomOption;
        }
    } else {
        (options as Select2Option).component = CustomOption;
    }
}

class Main extends React.Component<{}, {}> {
    data1 = data1;
    data2 = data2;
    data3 = data3;
    data4: Select2Data = JSON.parse(JSON.stringify(data3));
    data5 = data5;
    data6: Select2Data = JSON.parse(JSON.stringify(data3));
    data7: Select2Option[] = [];
    data8 = data8;
    data9: Select2Data = JSON.parse(JSON.stringify(data1));

    value1 = "CA";
    value2 = "CA";
    value3 = "foo";
    value4 = "bar";
    value5 = "foo3";
    value6 = "";
    value7 = "";
    value8 = "CA";
    value9: string[] = [];

    update1(value: string) {
        this.value1 = value;
        this.setState({ value1: this.value1 });
    }
    update2(value: string) {
        this.value2 = value;
        this.setState({ value2: this.value2 });
    }
    update3(value: string) {
        this.value3 = value;
        this.setState({ value3: this.value3 });
    }
    update5(value: string) {
        this.value5 = value;
        this.setState({ value5: this.value5 });
    }
    update6(value: string) {
        this.value6 = value;
        this.setState({ value6: this.value6 });
    }
    open7() {
        this.data7 = JSON.parse(JSON.stringify(data2));
        this.setState({ data7: this.data7 });
    }
    update7(value: string) {
        this.value7 = value;
        this.setState({ value7: this.value7 });
    }
    search7(text: string) {
        this.data7 = text
            ? (JSON.parse(JSON.stringify(data2)) as Select2Option[]).filter(option => option.label.toLowerCase().indexOf(text.toLowerCase()) > -1)
            : JSON.parse(JSON.stringify(data2));
        this.setState({ data7: this.data7 });
    }
    update8(value: string) {
        this.value8 = value;
        this.setState({ value8: this.value8 });
    }
    update9(value: string[]) {
        this.value9 = value;
        this.setState({ value9: this.value9 });
    }

    render() {
        return (
            <div style={{ width: "500px" }}>
                <a href="https://github.com/plantain-00/select2-component/tree/master/demo/react/index.tsx" target="_blank">the source code of the demo</a>
                <h3>options in group ({this.value1})</h3>
                <Select2 data={this.data1}
                    value={this.value1}
                    update={(value: string) => this.update1(value)}>
                </Select2>
                <h3>options ({this.value2})</h3>
                <Select2 data={this.data2}
                    value={this.value2}
                    update={(value: string) => this.update2(value)}>
                </Select2>
                <h3>less options ({this.value3})</h3>
                <Select2 data={this.data3}
                    value={this.value3}
                    update={(value: string) => this.update3(value)}>
                </Select2>
                <h3>disabled ({this.value4})</h3>
                <Select2 data={this.data4}
                    value={this.value4}
                    disabled={true}>
                </Select2>
                <h3>hide search box ({this.value5})</h3>
                <Select2 data={this.data5}
                    value={this.value5}
                    minCountForSearch={Infinity}
                    update={(value: string) => this.update5(value)}>
                </Select2>
                <h3>placeholder ({this.value6})</h3>
                <Select2 data={this.data6}
                    placeholder="select an item"
                    update={(value: string) => this.update6(value)}>
                </Select2>
                <h3>open and search event ({this.value7})</h3>
                <Select2 data={this.data7}
                    customSearchEnabled={true}
                    open={() => this.open7()}
                    search={text => this.search7(text)}
                    update={(value: string) => this.update7(value)}>
                </Select2>
                <h3>custom component ({this.value8})</h3>
                <Select2 data={this.data8}
                    value={this.value8}
                    update={(value: string) => this.update8(value)}>
                </Select2>
                <h3>multiple ({this.value9})</h3>
                <Select2 data={this.data9}
                    value={this.value9}
                    multiple={true}
                    update={(value: string[]) => this.update9(value)}>
                </Select2>
            </div>
        );
    }
}

ReactDOM.render(<Main />, document.getElementById("container"));
