import React from 'react'
import { CommonWealth } from './CommonWealth'

export const CustomCoverage = () => {
    return (
        <>
            <div className="sticky-con normal mt-5 pt-3">
                <div className="container-fluid quote-form border-0">
                    <div className="quote-form-status row align-items-center">
                        <div className="col-md-4 mb-3">
                            <div className="border-box colored text-center pb-2">
                                <div className="py-2 px-3">State Minimum Liability</div><span>$30k / $60k / $25k</span>
                                <a href="#" className="d-inline-block">Buy Now</a>
                                <a href="#" className="phone d-inline-block"><i className="fas fa-phone fa-flip-horizontal"></i></a>
                                <a href="#" className="email d-inline-block"><i className="fas fa-envelope-open-text"></i></a>
                            </div>
                            {/* <!--end of border-box colored--> */}
                        </div>
                        {/* <!--end of col-4--> */}
                        <div className="col-md-4 mb-3">
                            <div className="border-box colored text-center pb-2">
                                <div className="py-2 px-3">Liability with Comprehensive and Collision</div><span>$30k / $60k /
                                    $25k</span>
                                <a href="#" className="d-inline-block">Buy Now</a>
                                <a href="#" className="phone d-inline-block"><i className="fas fa-phone fa-flip-horizontal"></i></a>
                                <a href="#" className="email d-inline-block"><i className="fas fa-envelope-open-text"></i></a>
                            </div>
                            {/* <!--end of border-box colored--> */}
                        </div>
                        {/* <!--end of col-4--> */}
                        <div className="col-md-4 mb-3">
                            <div className="border-box colored text-center pb-2">
                                <div className="py-2 px-3">Liability with Comprehensive and Collision & Uninsured/Underinsured
                                    Motorist</div><span>$30k / $60k / $25k</span>
                                <a href="#" className="d-inline-block">Buy Now</a>
                                <a href="#" className="phone d-inline-block"><i className="fas fa-phone fa-flip-horizontal"></i></a>
                                <a href="#" className="email d-inline-block"><i className="fas fa-envelope-open-text"></i></a>
                            </div>
                            {/* <!--end of border-box colored--> */}
                        </div>
                        {/* <!--end of col-4--> */}
                        <CommonWealth />
                        {/* <!--end of col-4--> */}
                        <CommonWealth />
                        {/* <!--end of col-4--> */}
                        <CommonWealth />
                        {/* <!--end of col-4--> */}
                        <CommonWealth />
                        {/* <!--end of col-4--> */}
                    </div>
                    {/* <!--end of quote-form-status--> */}
                </div>
                {/* <!--end of container-fluid--> */}
            </div>
            <div className="container-fluid mb-5 mt-4">
                <button type="submit" className="">Start Over</button>
            </div>
        </>
    )
}
