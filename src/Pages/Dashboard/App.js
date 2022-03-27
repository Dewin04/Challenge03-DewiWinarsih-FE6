import React from 'react'
import TableComponent from './TableComponent';

const App = () => {
    state = {
        title : "Dashboard",
        user : [
            {
                no : 1,
                nama : "useremail",
                car : "car",
                startRent : "startRent",
                finishRent : "finishRent",
                price : "price",
                status : "status"
            },
            {
                no : 2,
                nama : "useremail",
                car : "car",
                startRent : "startRent",
                finishRent : "finishRent",
                price : "price",
                status : "status"
            },
            {
                no : 3,
                nama : "useremail",
                car : "car",
                startRent : "startRent",
                finishRent : "finishRent",
                price : "price",
                status : "status"
            },
            {
                no : 4,
                nama : "useremail",
                car : "car",
                startRent : "startRent",
                finishRent : "finishRent",
                price : "price",
                status : "status"
            },
            {
                no : 5,
                nama : "useremail",
                car : "car",
                startRent : "startRent",
                finishRent : "finishRent",
                price : "price",
                status : "status"
            },
            {
                no : 6,
                nama : "useremail",
                car : "car",
                startRent : "startRent",
                finishRent : "finishRent",
                price : "price",
                status : "status"
            },
            {
                no : 7,
                nama : "useremail",
                car : "car",
                startRent : "startRent",
                finishRent : "finishRent",
                price : "price",
                status : "status"
            },
            {
                no : 8,
                nama : "useremail",
                car : "car",
                startRent : "startRent",
                finishRent : "finishRent",
                price : "price",
                status : "status"
            },
            {
                no : 9,
                nama : "useremail",
                car : "car",
                startRent : "startRent",
                finishRent : "finishRent",
                price : "price",
                status : "status"
            },
            {
                no : 10,
                nama : "useremail",
                car : "car",
                startRent : "startRent",
                finishRent : "finishRent",
                price : "price",
                status : "status"
            },
        ],
    };
  return (
    <div>
        <TableComponent user={this.state.user}/>
    </div>
  )
}

export default App