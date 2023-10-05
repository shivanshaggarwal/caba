import React from 'react'

function FullName() {
  return (
    <div className="offset-2 col-7 p-0">
                            <div className="row gy-2 m-0">
                                <div className="col-6 col-md-2 p-1 text-start">
                                    <select id="inputState" className="form-select p-1" aria-label=''>
                                        <option selected className='fs-6 fw-lighter'>-Select-</option>
                                        <option>Mr.</option>
                                        <option>Ms.</option>
                                        <option>Mrs.</option>
                                    </select>
                                    <label className="m-1" htmlFor="specificSizeInputName">Title</label>
                                </div>
                                <div className="col-md-3 p-1 text-start">
                                    <input type="text" className="form-control" id="specificSizeInputName" />
                                    <label htmlFor="specificSizeInputName">First</label>
                                </div>
                                <div className="col-md-3 p-1 text-start">
                                    <input type="text" className="form-control" id="specificSizeInputName" />
                                    <label htmlFor="specificSizeInputName">Middle</label>
                                </div>
                                <div className="col-md-4 p-1 text-start">
                                    <input type="text" className="form-control" id="specificSizeInputName" />
                                    <label htmlFor="specificSizeInputName">Last</label>
                                </div>
                            </div>
                        </div>
  )
}

export default FullName
