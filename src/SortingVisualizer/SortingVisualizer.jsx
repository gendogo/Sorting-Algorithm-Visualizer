import React from "react";
import './SortingVisualizer.css';
import * as sortingAlgorithms from '../sortingAlgorithms/sortingAlgorithms.js';

export default class SortingVisualizer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            array: [],
        };
    }

    componentDidMount() {
        this.resetArray();
    }

    resetArray() {
        const array = [];
        for (let i = 0; i < 310; i++) {
            array.push(randomIntFromIntervals(5, 730));
        }
        this.setState({ array });
    }

    mergeSort() {
        const sortedArray = sortingAlgorithms.mergeSort(this.state.array);
        console.log(sortedArray);
    }

    render() {
        const { array } = this.state;
        return (
            <div className="array-container">
                {
                    array.map((value, idx) => (
                        <div
                            className="array-bar"
                            key={idx}
                            style={{ height: `${value}px` }}></div>
                    ))
                }
                <button onClick={() => this.resetArray()}> Generate New Array </button>
                <button onClick={() => this.mergeSort()}> Merge Sort </button>

            </div>
        );
    }
}

function randomIntFromIntervals(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}