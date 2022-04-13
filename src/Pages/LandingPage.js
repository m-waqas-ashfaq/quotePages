import React from 'react'

export const LandingPage = () => {
    return (
        <>
            <div className='quotes-page'>
                <div className="col-12 header">
                    <div className="row">
                        <a href="#driver" className="col-md-3 driver active p-2">
                            <span className="img fas fa-user-tie float-left"></span>
                            <h3>Driver</h3>
                            <span>Add Driver Information</span>
                        </a>
                        {/* <!--end of col-12--> */}
                        <a className="col-md-3 car p-2" href="#car">
                            <span className="img fas fa-car float-left"></span>
                            <h3>Car</h3>
                            <span>Add Your Car Information</span>
                        </a>
                        {/* <!--end of col-12--> */}
                        <a href="#coverage" className="col-md-3 policy p-2">
                            <span className="img fa fa-thumbs-up float-left"></span>
                            <h3>Coverage</h3>
                            <span>Add Your coverage Information</span>
                        </a>
                        {/* <!--end of col-12--> */}
                        <div className="col-md-3 quote p-2">
                            <span className="img fas fa-quote-right float-left"></span>
                            <h3>Quotes</h3>
                            <span className="">Custom quotes</span>
                        </div>
                        {/* <!--end of col-12--> */}
                    </div>
                    {/* <!--end of row--> */}
                </div>
                {/* <!--end of col-auto--> */}
                <div className="sticky-con">
                    <div className="row">
                        <div className="col">
                            <div className="container-fluid quote-form border-0">
                                <div className="quote-form-status row align-items-center">
                                    <div className="col-12 mb-1">
                                        <h2 className="text-center mt-4">Estimated quote</h2>
                                    </div>
                                    {/* <!--end of col-4--> */}
                                    <div className="col-md-4 mb-3">
                                        <div className="border-box colored">
                                            <div className="py-2 px-3">State Minimum Liability</div><span>$30k / $60k / $25k</span>
                                        </div>
                                        {/* <!--end of border-box colored--> */}
                                    </div>
                                    {/* <!--end of col-4--> */}
                                    <div className="col-md-4 mb-3">
                                        <div className="border-box colored">
                                            <div className="py-2 px-3">Liability with Comprehensive and Collision</div><span>$30k / $60k / $25k</span>
                                        </div>
                                        {/* <!--end of border-box colored--> */}
                                    </div>
                                    {/* <!--end of col-4--> */}
                                    <div className="col-md-4 mb-3">
                                        <div className="border-box colored">
                                            <div className="py-2 px-3">Liability with Comprehensive and Collision & Uninsured/Underinsured Motorist</div><span>$30k / $60k / $25k</span>
                                        </div>
                                        {/* <!--end of border-box colored--> */}
                                    </div>
                                    {/* <!--end of col-4--> */}
                                </div>
                                {/* <!--end of quote-form-status--> */}
                            </div>
                            {/* <!--end of col--> */}
                        </div>
                    </div>
                    {/* <!--end of container-fluid--> */}
                </div>
                <section className="content">
                    <div className="row m-0">
                        <div className="col-auto pl-0">
                            <div className="sidebar my-4">
                                <div className="d-block border-bottom p-3">
                                    <h2>Zip Code</h2>
                                    <div className="d-flex align-items-center"><div className="flex-grow-1"><b>77809</b></div><div><a href="#"><i className="fas fa-edit"></i></a></div></div>
                                </div>
                                {/* <!--end of d-block--> */}
                                <div className="d-block border-bottom p-3">
                                    <h2>Drivers</h2>
                                    <div className="d-flex align-items-center"><div className="flex-grow-1"><b>James Richard Perry</b></div><div> <a href="#"><i className="fas fa-user-check"></i></a><a href="#"><i className="fas fa-edit"></i></a></div></div>
                                    <a className="d-block mt-3" href="#" data-toggle="modal" data-target="#driverlist"><i className="fas fa-plus-circle"></i> Add another driver</a>
                                </div>
                                {/* <!--end of d-block--> */}
                                <div className="d-block border-bottom p-3">
                                    <h2>Cars</h2>
                                    <div className="d-flex align-items-center w-100"><div className="flex-grow-1"><b>Lexus RX 300</b> <span className="d-block">1999</span></div><div><a href="#"><i className="fas fa-user-check"></i></a><a href="#"><i className="fas fa-minus-circle"></i></a></div></div>
                                    <a className="d-block mt-3" href="#" data-toggle="modal" data-target="#carlist"><i className="fas fa-plus-circle"></i> Add another car</a>
                                </div>
                                {/* <!--end of d-block--> */}
                                <a href="#" className="mx-3 mt-2 d-block text-center font-weight-bold c-pink" data-toggle="modal" data-target="#custom-quote-form">Custom Coverage</a>
                            </div>
                            {/* <!--end of sidebar--> */}
                        </div>
                        {/* <!--end of col-auto--> */}
                        <div className="col pr-0">
                            <div className="quote-form my-4">
                                <div className="container-fluid">
                                    <form className="row align-items-center pt-4">
                                        <h1 className="col-12 my-5 text-center">Let's start with the primary driver's information</h1>
                                        <div className="col-md-6">
                                            <select className="custom-select form-control">
                                                <option value="Texes DL">Texes DL</option>
                                                <option value="TX ID.">TX ID.</option>
                                                <option value="Out of state DL">Out of state DL</option>
                                                <option value="Foreign ID/DL">Foreign ID/DL</option>
                                                <option value="Matricula">Matricula</option>
                                            </select>

                                        </div>
                                        {/* <!--end of col-md-6--> */}
                                        <div className="col-md-6">
                                            <input type="text" placeholder="Please enter your TX Driver's License #" className="form-control" />
                                        </div>
                                        {/* <!--end of col-md-6--> */}
                                        <div className="col-md-12 mt-3">
                                            <input type="checkbox" className="mr-2" /> I agree to the following <a href="#">information disclosure</a> and <a href="#">privacy policy</a>.
                                        </div>
                                        {/* <!--end of col-md-12--> */}
                                        <div className="col-12 mt-3 mb-4" id="driver">
                                            <div className="con-heading">
                                                <h2>If you don't have Driver license or can't find it, continue here</h2>
                                            </div>
                                        </div>
                                        {/* <!--end of col-12--> */}
                                        <div className="col-md-6 mb-3">
                                            <input type="text" placeholder="First Name" className="form-control" />
                                        </div>
                                        {/* <!--end of col-md-6--> */}
                                        <div className="col-md-6 mb-3">
                                            <input type="text" placeholder="Last name" className="form-control" />
                                        </div>
                                        {/* <!--end of col-md-6--> */}
                                        <div className="col-md-6 mb-3">
                                            <input type="text" placeholder="Date of Birth" className="form-control" />
                                        </div>
                                        {/* <!--end of col-md-6--> */}
                                        <div className="col-12 mt-5 mb-4">
                                            <div className="con-heading">
                                                <h2>Please tell us where your(s) vahicle will be parked</h2>
                                            </div>
                                        </div>
                                        {/* <!--end of col-12--> */}
                                        <div className="col-md-6 mb-3">
                                            <input type="text" placeholder="Street Address" className="form-control" />
                                        </div>
                                        {/* <!--end of col-md-6--> */}
                                        <div className="col-md-6 mb-3">
                                            <input type="text" placeholder="City" className="form-control" />
                                        </div>
                                        {/* <!--end of col-md-6--> */}
                                        <div className="col-md-6 mb-3">
                                            <input type="text" placeholder="State" className="form-control" />
                                        </div>
                                        {/* <!--end of col-md-6--> */}
                                        <div className="col-md-6 mb-3">
                                            <input type="text" placeholder="Zip Code" className="form-control" />
                                        </div>
                                        {/* <!--end of col-md-6--> */}
                                        <div className="col-12 mb-3">
                                            <label className="d-inline-block mb-2">Do you Own or Rent your home?</label>
                                            <div className="term home ml-3 mb-2"><input type="radio" checked name="home" />Own<span></span></div>
                                            <div className="term home ml-2 mb-2"><input type="radio" name="home" />Rent<span></span></div>
                                        </div>
                                        {/* <!--end of col-12--> */}
                                        <div className="col-md-6 mb-3">
                                            <label>Marital Status</label>
                                            <div className="form-row">
                                                <div className="col">
                                                    <div className="border-box status">
                                                        <input type="radio" checked name="marital-status" />
                                                        <span className="single"></span>
                                                        <div>Single</div>
                                                    </div>
                                                    {/* <!--end of border-box--> */}
                                                </div>
                                                {/* <!--end of col--> */}
                                                <div className="col">
                                                    <div className="border-box status">
                                                        <input type="radio" name="marital-status" />
                                                        <span className="married"></span>
                                                        <div>Married</div>
                                                    </div>
                                                    {/* <!--end of border-box--> */}
                                                </div>
                                                {/* <!--end of col--> */}
                                            </div>
                                            {/* <!--end of form-row--> */}
                                        </div>
                                        {/* <!--end of col-md-6--> */}
                                        <div className="col-md-6 mb-3">
                                            <label>Gender</label>
                                            <div className="form-row">
                                                <div className="col">
                                                    <div className="border-box status">
                                                        <input type="radio" checked name="gender" />
                                                        <span className="male"></span>
                                                        <div>Male</div>
                                                    </div>
                                                    {/* <!--end of border-box--> */}
                                                </div>
                                                {/* <!--end of col--> */}
                                                <div className="col">
                                                    <div className="border-box status">
                                                        <input type="radio" name="gender" />
                                                        <span className="female"></span>
                                                        <div>Female</div>
                                                    </div>
                                                    {/* <!--end of border-box--> */}
                                                </div>
                                                {/* <!--end of col--> */}
                                            </div>
                                            {/* <!--end of form-row--> */}
                                        </div>
                                        {/* <!--end of col-md-6--> */}
                                        <div className="col-12"><a href="#" data-toggle="modal" data-target="#driverlist">Add another Driver</a></div>
                                        <div className="col-12 mt-5 mb-3" id="car">
                                            <div className="con-heading">
                                                <h2>Add a car</h2>
                                            </div>
                                        </div>
                                        {/* <!--end of col-12--> */}
                                        <div className="col-12">
                                            <div className="d-flex align-items-center flex-wrap select-car">
                                                <label className="selected flex-grow">2022 <a className="fas fa-times close-label"></a></label>
                                                <label className="selected">Kia <a className="fas fa-times close-label"></a></label>
                                                <label className="selected">STINGER GT LINE <a className="fas fa-times close-label"></a></label>
                                            </div>
                                            <select className="custom-select w-100 form-control mt-3">
                                                <option value="1">select</option>
                                                <option value="1">select</option>
                                            </select>
                                        </div>
                                        {/* <!--end of col-12--> */}
                                        <div className="col-12 mt-3"><a href="#" data-toggle="modal" data-target="#carlist">Add another car</a></div>
                                        <div className="col-12 mt-5 mb-4" id="coverage">
                                            <div className="con-heading"><h2>Policy Information</h2></div>
                                        </div>
                                        {/* <!--end of col-12--> */}
                                        <div className="col-12">
                                            <label className="w-100">Select the term and coverage that is best for you</label>
                                            <label className="d-inline-block mb-2">Term</label>
                                            <div className="term ml-3 mb-2"><input type="radio" checked name="term" />6 Months <span></span></div>
                                            <div className="term ml-2 mb-2"><input type="radio" name="term" />12 Months <span></span></div>
                                        </div>
                                        {/* <!--end of col-12--> */}
                                        <div className="col-12 mt-5 mb-4">
                                            <div className="con-heading"><h2>provide phone number and email to inform you about the opportunity</h2></div>
                                        </div>
                                        {/* <!--end of col-12--> */}
                                        <div className="col-md-6 mb-3">
                                            <input type="text" placeholder="State" className="form-control" />
                                        </div>
                                        {/* <!--end of col-md-6--> */}
                                        <div className="col-md-6 mb-3">
                                            <input type="text" placeholder="Zip Code" className="form-control" />
                                        </div>
                                        {/* <!--end of col-md-6--> */}
                                        <div className="col-md-12 mb-5 mt-3">
                                            <button type="submit">Get Quotes</button>
                                        </div>
                                        {/* <!--end of col-md-6--> */}
                                    </form>
                                </div>
                            </div>
                            {/* <!--end of container-fluid--> */}
                        </div>
                        {/* <!--end of col--> */}
                    </div>
                    {/* <!--end of row--> */}

                </section>
                {/* <!--end of content--> */}
                <div className="modal fade" id="custom-quote-form" data-backdrop="static" data-keyboard="false" tabIndex="-1" aria-labelledby="custom-quote-formLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header border-0 text-center pb-0">
                                <h1 className="modal-title w-100" id="add-driverLabel">Custom Coverage</h1>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body pt-0">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="con-heading">
                                            <h2 className="">Custom Coverage Form</h2>
                                        </div>
                                        <label className="mt-3 mb-0 pl-3">Liability BL</label>
                                        <select className="custom-select w-100 form-control">
                                            <option value="1">$30k / $60k </option>
                                            <option value="2">$50k / $100k </option>
                                            <option value="2">$100k / $300k </option>
                                            <option value="2">$250k / $500k </option>
                                        </select>
                                        <label className="mt-3 mb-0 pl-3">Liability PD</label>
                                        <select className="custom-select w-100 form-control">
                                            <option value="1">$25k</option>
                                            <option value="2">$50k</option>
                                            <option value="2">$100k</option>
                                        </select>
                                        <label className="mt-3 mb-0 pl-3">Personal Injury Protection</label>
                                        <select className="custom-select w-100 form-control">
                                            <option value="1">$2500k</option>
                                            <option value="2">$5000k</option>
                                            <option value="2">$10000k</option>
                                        </select>
                                        <label className="mt-3 mb-0 pl-3">Comprehensive Deductible</label>
                                        <select className="custom-select w-100 form-control">
                                            <option value="2">$500k</option>
                                            <option value="2">$1000k</option>
                                        </select>
                                        <label className="mt-3 mb-0 pl-3">Collision Deductible</label>
                                        <select className="custom-select w-100 form-control">
                                            <option value="2">$500k</option>
                                            <option value="2">$1000k</option>
                                        </select>
                                        <label className="mt-3 mb-0 pl-3">Rental Reimbursement</label>
                                        <select className="custom-select w-100 form-control">
                                            <option value="2">$15</option>
                                            <option value="2">$20</option>
                                            <option value="2">$25</option>
                                            <option value="2">$30</option>
                                            <option value="2">$35</option>
                                            <option value="2">$40</option>
                                        </select>
                                    </div>
                                    {/* <!--end of col-12--> */}
                                </div>
                                {/* <!--end of row--> */}
                            </div>
                            <div className="modal-footer border-0 pt-0 mb-3">
                                <button type="submit" className="">Get Quote</button>
                            </div>
                            {/* <!--end of modal-footer--> */}
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="driverlist" data-backdrop="static" data-keyboard="false" tabIndex="-1" aria-labelledby="driverlistLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header border-0 text-center pb-0">
                                <h1 className="modal-title w-100" id="add-driverLabel">Add Other Drivers</h1>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body pt-0">
                                <div className="row">
                                    <div className="col-12">
                                        <p className="px-4 text-center mt-3">Would you like to add other drivers living at your address?</p>
                                        <div className="con-heading">
                                            <h2 className="">Yes, Select a person</h2>
                                        </div>
                                    </div>
                                    {/* <!--end of col-12--> */}
                                    <div className="col-md-12 mb-0 mt-2">
                                        <div className="driver-list">
                                            <span className="d-block"><input type="radio" name="driver" /> <i></i><b>Sydney Alison Perry</b></span>
                                            <span className="d-block"><input type="radio" name="driver" /> <i></i><b>James Richard Perry</b></span>
                                            <span className="d-block"><input type="radio" name="driver" /> <i></i><b>Mary Anita Thigpen Perry</b></span>
                                        </div>
                                        {/* <!--end of driver-list--> */}
                                    </div>
                                    {/* <!--end of col-12--> */}
                                </div>
                                {/* <!--end of row--> */}
                            </div>
                            <div className="modal-footer border-0 pt-0 mb-3">
                                <button type="submit" className="driver-next">No, Next</button>
                                <button type="submit" data-toggle="modal" data-target="#add-driver">Yes, Add Driver Manually</button>
                            </div>
                            {/* <!--end of modal-footer--> */}
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="carlist" data-backdrop="static" data-keyboard="false" tabIndex="-1" aria-labelledby="carlistLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-lg">
                        <div className="modal-content">
                            <div className="modal-header border-0 text-center pb-0">
                                <h1 className="modal-title w-100" id="add-driverLabel">Select Your Car(s)</h1>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body pt-0">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="con-heading">
                                            <h2 className="">Choose your car from list</h2>
                                        </div>
                                    </div>
                                    {/* <!--end of col-12--> */}
                                    <div className="col-md-12 mb-0 mt-2">
                                        <div className="car-list">
                                            <div className="d-flex">
                                                <input type="radio" name="car" checked /> <i></i>
                                                <div className="img"><img className="img-fluid carLogo" src="https://quote.amaxinsurance.com/img/carLogos/noCarLogo.png" alt="BRIGHTDROP logo" /></div>
                                                <div className="detail">
                                                    <h3>Land Rover Lndrran</h3>
                                                    <span>2013</span>
                                                    <span className="d-block">Marry Anita Perry</span>
                                                </div>
                                            </div>
                                            {/* <!--end of d-flex--> */}
                                            <div className="d-flex">
                                                <input type="radio" name="car" /> <i></i>
                                                <div className="img"><img className="img-fluid carLogo" src="https://quote.amaxinsurance.com/img/carLogos/LEXUS@3x.png" alt="LEXUS logo" /></div>
                                                <div className="detail">
                                                    <h3>Lexus Lexus RX300</h3>
                                                    <span>1999</span>
                                                    <span className="d-block">Marry Anita Thigpen Perry</span>
                                                </div>
                                            </div>
                                            {/* <!--end of d-flex--> */}
                                            <div className="d-flex">
                                                <input type="radio" name="car" /> <i></i>
                                                <div className="img"><img className="img-fluid carLogo" src="https://quote.amaxinsurance.com/img/carLogos/noCarLogo.png" alt="BRIGHTDROP logo" /></div>
                                                <div className="detail">
                                                    <h3>Land Rover Lndr</h3>
                                                    <span>2015</span>
                                                    <span className="d-block">Marry Anita Perry</span>
                                                </div>
                                            </div>
                                            {/* <!--end of d-flex--> */}
                                            <div className="d-flex">
                                                <input type="radio" name="car" /> <i></i>
                                                <div className="img"><img className="img-fluid carLogo" src="https://quote.amaxinsurance.com/img/carLogos/noCarLogo.png" alt="BRIGHTDROP logo" /></div>
                                                <div className="detail">
                                                    <h3>Jep Jep</h3>
                                                    <span>1985</span>
                                                    <span className="d-block">Marry Anita Perry</span>
                                                </div>
                                            </div>
                                            {/* <!--end of d-flex--> */}
                                            <div className="d-flex">
                                                <input type="radio" name="car" /> <i></i>
                                                <div className="img"><img className="img-fluid carLogo" src="https://quote.amaxinsurance.com/img/carLogos/CHEVROLET@3x.png" alt="CHEVROLET logo" /></div>
                                                <div className="detail">
                                                    <h3>Chevrolet Chev</h3>
                                                    <span>1972</span>
                                                    <span className="d-block">James Richard Perry</span>
                                                </div>
                                            </div>
                                            {/* <!--end of d-flex--> */}
                                            <div className="d-flex">
                                                <input type="radio" name="car" /> <i></i>
                                                <div className="img"><img className="img-fluid carLogo" src="https://quote.amaxinsurance.com/img/carLogos/LEXUS@3x.png" alt="LEXUS logo" /></div>
                                                <div className="detail">
                                                    <h3>Lexus Lexus RX300</h3>
                                                    <span>2005</span>
                                                    <span className="d-block">Joe F Weber</span>
                                                </div>
                                            </div>
                                            {/* <!--end of d-flex--> */}
                                        </div>
                                        {/* <!--end of driver-list--> */}
                                    </div>
                                    {/* <!--end of col-12--> */}
                                </div>
                                {/* <!--end of row--> */}
                            </div>
                            <div className="modal-footer border-0 pt-0 mb-3">
                                <button type="submit" className="driver-next">No, Next</button>
                                <button type="submit" data-toggle="modal" data-target="#add-car">Add New Car</button>
                            </div>
                            {/* <!--end of modal-footer--> */}
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="add-driver" data-backdrop="static" data-keyboard="false" tabIndex="-1" aria-labelledby="add-driverLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header border-0 text-center">
                                <h1 className="modal-title w-100" id="add-driverLabel">Add a Driver</h1>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="con-heading">
                                            <h2 className="">Please Enter Your Driver Information</h2>
                                        </div>
                                        <p className="px-4 text-center mt-3">Let's start with your Driver License # which will automatically fill in your information</p>
                                    </div>
                                    {/* <!--end of col-12--> */}
                                    <div className="col-md-12 mb-0">
                                        <input type="text" placeholder="Driver License #" className="form-control" />
                                    </div>
                                    {/* <!--end of col-12--> */}
                                    <div className="col-md-12">
                                        <h2 className="px-4 text-center mt-3 mb-0">OR</h2>
                                        <p className="px-4 text-center">If you don't have Driver license or can't find it, continue here</p>
                                    </div>
                                    {/* <!--end of col-12--> */}
                                    <div className="col-md-12 mb-3">
                                        <input type="text" placeholder="First Name" className="form-control" />
                                    </div>
                                    {/* <!--end of col-12--> */}
                                    <div className="col-md-12 mb-3">
                                        <input type="text" placeholder="Last name" className="form-control" />
                                    </div>
                                    {/* <!--end of col-12--> */}
                                    <div className="col-md-12 mb-3">
                                        <input type="text" placeholder="Date of Birth" className="form-control" />
                                    </div>
                                    {/* <!--end of col-12--> */}
                                </div>
                                {/* <!--end of row--> */}
                            </div>
                            <div className="modal-footer border-0 pt-0 mb-3">
                                <button type="submit">Next</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="add-car" data-backdrop="static" data-keyboard="false" tabIndex="-1" aria-labelledby="add-carLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-lg">
                        <div className="modal-content">
                            <div className="modal-header border-0 text-center">
                                <h1 className="modal-title w-100" id="add-driverLabel">Add a Car</h1>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="con-heading">
                                            <h2 className="">Select Year</h2>
                                        </div>
                                    </div>
                                    {/* <!--end of col-12--> */}
                                    <div className="col-md-12 mb-4">
                                        <select className="custom-select w-100 form-control mt-3">
                                            <option value="1">select</option>
                                            <option value="1">select</option>
                                        </select>
                                    </div>
                                    {/* <!--end of col-12--> */}
                                    <div className="col-12">
                                        <div className="con-heading">
                                            <h2 className="">Select Car</h2>
                                        </div>
                                    </div>
                                    {/* <!--end of col-12--> */}
                                    <div className="col-md-12 mb-0">
                                        <div className="scrollarea-content content" tabIndex="1">
                                            <button type="button" className="list-group-item list-group-item-action"><img className="img-fluid carLogo" src="https://quote.amaxinsurance.com/img/carLogos/ACURA@3x.png" alt="ACURA logo" /><h6 className="mb-1 title c-red">ACURA</h6></button>
                                            <button type="button" className="list-group-item list-group-item-action"><img className="img-fluid carLogo" src="https://quote.amaxinsurance.com/img/carLogos/AUDI@3x.png" alt="AUDI logo" /><h6 className="mb-1 title c-red">AUDI</h6></button>
                                            <button type="button" className="list-group-item list-group-item-action"><img className="img-fluid carLogo" src="https://quote.amaxinsurance.com/img/carLogos/BMW@3x.png" alt="BMW logo" /><h6 className="mb-1 title c-red">BMW</h6></button>
                                            <button type="button" className="list-group-item list-group-item-action"><img className="img-fluid carLogo" src="https://quote.amaxinsurance.com/img/carLogos/BUICK@3x.png" alt="BUICK logo" /><h6 className="mb-1 title c-red">BUICK</h6></button>
                                            <button type="button" className="list-group-item list-group-item-action"><img className="img-fluid carLogo" src="https://quote.amaxinsurance.com/img/carLogos/CADILLAC@3x.png" alt="CADILLAC logo" /><h6 className="mb-1 title c-red">CADILLAC</h6></button>
                                            <button type="button" className="list-group-item list-group-item-action"><img className="img-fluid carLogo" src="https://quote.amaxinsurance.com/img/carLogos/CHEVROLET@3x.png" alt="CHEVROLET logo" /><h6 className="mb-1 title c-red">CHEVROLET</h6></button>
                                            <button type="button" className="list-group-item list-group-item-action"><img className="img-fluid carLogo" src="https://quote.amaxinsurance.com/img/carLogos/CHRYSLER@3x.png" alt="CHRYSLER logo" /><h6 className="mb-1 title c-red">CHRYSLER</h6></button>
                                            <button type="button" className="list-group-item list-group-item-action"><img className="img-fluid carLogo" src="https://quote.amaxinsurance.com/img/carLogos/FORD@3x.png" alt="FORD logo" /><h6 className="mb-1 title c-red">FORD</h6></button>
                                            <button type="button" className="list-group-item list-group-item-action"><img className="img-fluid carLogo" src="https://quote.amaxinsurance.com/img/carLogos/GENESIS@3x.png" alt="GENESIS logo" /><h6 className="mb-1 title c-red">GENESIS</h6></button>
                                            <button type="button" className="list-group-item list-group-item-action"><img className="img-fluid carLogo" src="https://quote.amaxinsurance.com/img/carLogos/GMC@3x.png" alt="GMC logo" /><h6 className="mb-1 title c-red">GMC</h6></button>
                                            <button type="button" className="list-group-item list-group-item-action"><img className="img-fluid carLogo" src="https://quote.amaxinsurance.com/img/carLogos/HONDA@3x.png" alt="HONDA logo" /><h6 className="mb-1 title c-red">HONDA</h6></button>
                                            <button type="button" className="list-group-item list-group-item-action"><img className="img-fluid carLogo" src="https://quote.amaxinsurance.com/img/carLogos/HYUNDAI@3x.png" alt="HYUNDAI logo" /><h6 className="mb-1 title c-red">HYUNDAI</h6></button>
                                            <button type="button" className="list-group-item list-group-item-action"><img className="img-fluid carLogo" src="https://quote.amaxinsurance.com/img/carLogos/INFINITI@3x.png" alt="INFINITI logo" /><h6 className="mb-1 title c-red">INFINITI</h6></button>
                                            <button type="button" className="list-group-item list-group-item-action"><img className="img-fluid carLogo" src="https://quote.amaxinsurance.com/img/carLogos/JEEP@3x.png" alt="JEEP logo" /><h6 className="mb-1 title c-red">JEEP</h6></button>
                                            <button type="button" className="list-group-item list-group-item-action"><img className="img-fluid carLogo" src="https://quote.amaxinsurance.com/img/carLogos/KIA@3x.png" alt="KIA logo" /><h6 className="mb-1 title c-red">KIA</h6></button>
                                            <button type="button" className="list-group-item list-group-item-action"><img className="img-fluid carLogo" src="https://quote.amaxinsurance.com/img/carLogos/LAND ROVER@3x.png" alt="LAND ROVER logo" /><h6 className="mb-1 title c-red">LAND ROVER</h6></button>
                                            <button type="button" className="list-group-item list-group-item-action"><img className="img-fluid carLogo" src="https://quote.amaxinsurance.com/img/carLogos/LEXUS@3x.png" alt="LEXUS logo" /><h6 className="mb-1 title c-red">LEXUS</h6></button>
                                            <button type="button" className="list-group-item list-group-item-action"><img className="img-fluid carLogo" src="https://quote.amaxinsurance.com/img/carLogos/LINCOLN@3x.png" alt="LINCOLN logo" /><h6 className="mb-1 title c-red">LINCOLN</h6></button>
                                            <button type="button" className="list-group-item list-group-item-action"><img className="img-fluid carLogo" src="https://quote.amaxinsurance.com/img/carLogos/MAZDA@3x.png" alt="MAZDA logo" /><h6 className="mb-1 title c-red">MAZDA</h6></button>
                                            <button type="button" className="list-group-item list-group-item-action"><img className="img-fluid carLogo" src="https://quote.amaxinsurance.com/img/carLogos/MERCEDES BENZ@3x.png" alt="MERCEDES BENZ logo" /><h6 className="mb-1 title c-red">MERCEDES BENZ</h6></button>
                                            <button type="button" className="list-group-item list-group-item-action"><img className="img-fluid carLogo" src="https://quote.amaxinsurance.com/img/carLogos/MINI@3x.png" alt="MINI logo" /><h6 className="mb-1 title c-red">MINI</h6></button>
                                            <button type="button" className="list-group-item list-group-item-action"><img className="img-fluid carLogo" src="https://quote.amaxinsurance.com/img/carLogos/MITSUBISHI@3x.png" alt="MITSUBISHI logo" /><h6 className="mb-1 title c-red">MITSUBISHI</h6></button>
                                            <button type="button" className="list-group-item list-group-item-action"><img className="img-fluid carLogo" src="https://quote.amaxinsurance.com/img/carLogos/NISSAN@3x.png" alt="NISSAN logo" /><h6 className="mb-1 title c-red">NISSAN</h6></button>
                                            <button type="button" className="list-group-item list-group-item-action"><img className="img-fluid carLogo" src="https://quote.amaxinsurance.com/img/carLogos/RAM@3x.png" alt="RAM logo" /><h6 className="mb-1 title c-red">RAM</h6></button>
                                            <button type="button" className="list-group-item list-group-item-action"><img className="img-fluid carLogo" src="https://quote.amaxinsurance.com/img/carLogos/SUBARU@3x.png" alt="SUBARU logo" /><h6 className="mb-1 title c-red">SUBARU</h6></button>
                                            <button type="button" className="list-group-item list-group-item-action"><img className="img-fluid carLogo" src="https://quote.amaxinsurance.com/img/carLogos/TESLA@3x.png" alt="TESLA logo" /><h6 className="mb-1 title c-red">TESLA</h6></button>
                                            <button type="button" className="list-group-item list-group-item-action"><img className="img-fluid carLogo" src="https://quote.amaxinsurance.com/img/carLogos/TOYOTA@3x.png" alt="TOYOTA logo" /><h6 className="mb-1 title c-red">TOYOTA</h6></button>
                                            <button type="button" className="list-group-item list-group-item-action"><img className="img-fluid carLogo" src="https://quote.amaxinsurance.com/img/carLogos/VOLKSWAGEN@3x.png" alt="VOLKSWAGEN logo" /><h6 className="mb-1 title c-red">VOLKSWAGEN</h6></button>
                                            <button type="button" className="list-group-item list-group-item-action"><img className="img-fluid carLogo" src="https://quote.amaxinsurance.com/img/carLogos/VOLVO@3x.png" alt="VOLVO logo" /><h6 className="mb-1 title c-red">VOLVO</h6></button>
                                        </div>
                                    </div>
                                    {/* <!--end of col-12--> */}
                                </div>
                                {/* <!--end of row--> */}
                            </div>
                            <div className="modal-footer border-0 pt-0 mb-3">
                                <button type="submit">Next</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
