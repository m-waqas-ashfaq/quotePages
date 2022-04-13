import React from 'react'
export const AddQuote = () => {
    return (
        <>
            <div className="sticky-con normal my-5 pzip">
                <div className="container-fluid quote-form border-0">
                    <div className="row justify-content-center">
                        <div className="col-12 mb-3">
                            <h1 className="text-center">Easy to Einsure</h1>
                        </div>
                        {/* <!--end of col-12--> */}
                        <div className="col-12 mb-5">
                            {/* <!-- <h2 className="text-center">Affordable Insurance made easy</h2>  --> */}
                        </div>
                        {/* <!--end of col-12--> */}
                        <div className="col-12 mb-3">
                            <p className="text-center">Please enter your Zip code to start your quote</p>
                        </div>
                        {/* <!--end of col-12--> */}
                        <div className="col-auto mb-5 pr-1">
                            <input type="text" className="form-control" placeholder="Enter zip code ..." />
                        </div>
                        {/* <!--end of col-auto--> */}
                        <div className="col-auto mb-5 pl-0">
                            <button type="submit">GET QUOTE</button>
                        </div>
                        {/* <!--end of col-auto--> */}
                    </div>
                    {/* <!--end of row--> */}
                </div>
                {/* <!--end of container-fluid--> */}
            </div>
        </>
    )
}
