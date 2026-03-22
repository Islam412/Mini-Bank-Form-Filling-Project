import "./FormStyle.css";
import Modal from "./Modal";

export default function LoanForm() {
    return (
        <div className="flex container">
            <form className="form" id="loan-form">
                <h1>Requesting a Loan</h1>
                <hr/>

                <label>Name: </label>
                <input />

                <label>Phone Number: </label>
                <input />

                <label>Age: </label>
                <input />

                <label style={{ marginTop: '30px' }}>Are you an employee? </label>
                <input type="checkbox" />

                <label>Salary </label>
                <select>
                    <option>Less than 500$</option>
                    <option>Less than 400$</option>
                    <option>Less than 300$</option>
                    <option>Less than 200$</option>
                </select>

                <button id="submit-loan-btn">Submit</button>
            </form>
        </div>
    )
}