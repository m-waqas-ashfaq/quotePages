import React from 'react'

export const CommonWealth = () => {
    return (
        <>
            <div className="col-md-12 mb-3">
                <div className="border-box simple p-3">
                    <div className="row align-items-center">
                        <div className="img col-md-auto mb-3 mb-md-0">
                            <img src="https://tplinsurance.com/wp-content/uploads/2018/10/TPL-insurance-logo-updatenew.png"
                                alt="" />
                        </div>
                        {/* <!--end of img--> */}
                        <div className="q-con d-flex col-md mb-3 mb-md-0">
                            <div className="col-sm col-12">
                                <h2>Commonwealth General RTR</h2>
                                <b className="d-block">$604.77 / Total (paid in full)</b>
                                <span>Quote ID 685-XLFTG</span>
                            </div>
                            <div className="col-sm col-12">
                                <h2>$135.81 Down Payment</h2>
                                <b className="d-block">$96.79 x 5 Months</b>
                                <a href="#">View Quote</a>
                            </div>
                        </div>
                        {/* <!--end of q-con--> */}
                        <div className="link col-md-auto col-12">
                            <a href="#" className="d-block">Buy Now</a>
                            <a href="#" className="phone"><i className="fas fa-phone fa-flip-horizontal"></i></a>
                            <a href="#" className="email"><i className="fas fa-envelope-open-text"></i></a>
                        </div>
                    </div>
                </div>
                {/* <!--end of border-box colored--> */}
            </div>
        </>
    )
}
