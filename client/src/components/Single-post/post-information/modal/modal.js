import React from 'react'

import "./modal.scss"

const Modal = ({handleClose, show, children, teamlabstoreService, newText, id}) => {
    const showHideClassName = show ? 'modal display-b' : 'modal display-n';
    const onSubmit = async (e) => {
        e.preventDefault();
        const body = JSON.stringify({updatedText: newText});
        const res = await teamlabstoreService.updateSinglePost(id,body);
        console.log("update:", res)
    };
    return (
        <div className={showHideClassName}>
            <section className='modal-main'>
                <form onSubmit={onSubmit} className="form-group ">
                    {children}
                    <div className="d-flex flex-row justify-content-around buttons">
                        <button type="submit" className="btn btn-outline-dark">
                            Update
                        </button>
                        <button
                            className="btn btn-outline-dark"
                            onClick={handleClose}
                        >
                            Close
                        </button>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default Modal;