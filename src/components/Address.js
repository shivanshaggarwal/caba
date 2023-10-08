import React from 'react'

function Address() {
    return (
        <div className="row m-0 p-0">
            <div className="p-0">
                <input type="text" class="form-control" id="inputAddress" placeholder="" />
                <p className='text-start fs-6 fw-lighter'>Street Adress</p>
            </div>
            <div className="mt-2 p-0">
                <input type="text" class="form-control" id="inputAddress" placeholder="" />
                <p className='text-start fs-6 fw-lighter'>Adress Line 2</p>
            </div>
            <div className="col-12 mt-2 p-0">
                <div className="row m-0 p-0 ">
                    <div className="col-6 ps-0">
                        <input type="text" class="form-control" id="inputAddress" placeholder="" />
                        <p className='text-start fs-6 fw-lighter'>City</p>
                    </div>
                    <div className="col-6 p-0">
                        <input type="text" class="form-control" id="inputAddress" placeholder="" />
                        <p className='text-start fs-6 fw-lighter'>State/Region/Province</p>
                    </div>
                </div>
            </div>
            <div className="col-12 mt-2 p-0">
                <div className="row m-0 p-0 ">
                    <div className="col-6 ps-0">
                        <input type="text" class="form-control" id="inputAddress" placeholder="" />
                        <p className='text-start fs-6 fw-lighter'>Postal / Zip Code</p>
                    </div>
                    <div className="col-6 p-0">
                        <input type="text" class="form-control" id="inputAddress" placeholder="" />
                        <p className='text-start fs-6 fw-lighter'>Country</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Address
