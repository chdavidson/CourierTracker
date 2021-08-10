import React,{useState}  from "react";
import DateTimePicker from "@react-native-community/datetimepicker/src/datetimepicker";
import { StyleSheet } from "react-native";

const DatePicker = () => {


    const [date, setDate] = useState(Date.now())
    const handleDateChange = (event, date) => { console.log(date)}
    return (
        <DateTimePicker
            style={styles.datePickerStyle}
            // date={date} //initial date from state
            mode="date" //The enum of date, datetime and time
            placeholder="select date"
            format="DD-MM-YYYY"
            minDate="01-01-2016"
            maxDate="01-01-2022"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            value={date}
            onDateChange={handleDateChange()}
            // will take an onDateChange function here
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