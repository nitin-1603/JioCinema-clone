import '../App.css'

const Login = () => {
    return (
        <>
            {/* <div className="container">
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Login to continue</label>
                    <input type="number" className="form-control" id="exampleFormControlInput1"  />
                </div>
            </div> */}

            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-7">
                        <div className="card">
                            <div className="card-header">Login with Number</div>
                            <div className="card-body">
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="phoneNumber" className="form-label">Login to Continue</label>
                                        <input type="number" className="form-control" id="phoneNumber" placeholder="Enter your phone number with country code" />
                                    </div>
                                    <button type="submit" className="btn btn-primary">Login</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Login
