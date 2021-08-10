import React,{useState}  from "react";
import DateTimePicker from "@react-native-community/datetimepicker/src/datetimepicker";
import { StyleSheet } from "react-native";

const DatePicker = ({onDateChange}) => {


    const [date, setDate] = useState(Date.now())



    return (
        <DateTimePicker
            style={styles.datePickerStyle}
            mode="date" //The enum of date, datetime and time
            placeholder="select date"
            format="DD-MM-YYYY"
            minDate="01-01-2016"
            maxDate="01-01-2022"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            value={date}
            onChange={onDateChange}
        />
    )
}

const styles = StyleSheet.create({
    datePickerStyle: {
        width: 200,
        // marginTop: 20,
        color: 'white',
        borderColor: 'white'
    },
});

export default DatePicker;