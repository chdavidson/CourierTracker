import React, {useState, useEffect} from 'react';
import Request from '../helpers/request'

const MainContainer = () => {
    const [users, setUsers] = useState(null);
    const [payslips, setPayslips] = useState(null)
    const [expenses, setExpenses] = useState(null)

    const requestAll = function () {
        const request = new Request();
        const userPromise = request.get('/api/')
    }
}