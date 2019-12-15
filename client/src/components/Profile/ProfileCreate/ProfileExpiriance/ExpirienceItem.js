import React, {Fragment,useState} from "react";
import "../../profile.scss"
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {ExpAction} from '../../../../actions/allProfile'

const Expirianceitems=({items,ExpAction})=>

{
    
    const [formData, setFormData] = useState({
        position:"",
        company:"",
        location: "",
        from:"", 
        to: "",
        description: ""
    });
    const { position,company,location,from,to,description} = formData;

   const onChange = e =>{
           setFormData({ ...formData, [e.target.name]: e.target.value });
   }
     const onSubmit = e => {
        e.preventDefault();
        ExpAction({company,position,location,from,to,description});
    };
       let  expModel={
        position:null,
        company:null,
        location: null,
        from:null,
        to: null,
        description: null,
        readOnly:false
    }
        if (items)
        { 
            expModel.readOnly=true
            if (items.position){expModel.position=items.position} else {expModel.position='no data'}
            if (items.company){expModel.company=items.company} else {expModel.company='no data'}
            if (items.location){expModel.location=items.location} else {expModel.location='no data'}
            if (items.description){expModel.description=items.description} else {expModel.description='no data'}
            if (items.from){expModel.from=items.from} else {expModel.from='no data'}
            if (items.current){expModel.to="curent"} else 
                {if (items.to){
                    expModel.to=items.to}else {expModel.to='no data'}}
        }
        else
         {
             expModel.readOnly=false
             expModel.position="position"
             expModel.company="company"
             expModel.location="location"
             expModel.from="YYYY-MM-DD"
             expModel.to="YYYY-MM-DD"
             expModel.description="description"

         }
        return(
            <Fragment>
            <form onSubmit={(e) =>onSubmit(e)}>
                <div>Experience</div>
                     <div className="row">
                         <div className="col">
                             <label htmlFor="name">Company</label>
                             <input 
                                    readOnly={expModel.readOnly}   
                                    type="text" 
                                    className="form-control" 
                                    placeholder={expModel.company}
                                    id="company"
                                    name="company"
                                    onChange={e =>onChange(e)}
                                     required
                                     />
                         </div>
                         <div className="col">
                             <label htmlFor="name">Position</label>
                             <input 
                                    readOnly={expModel.readOnly}  
                                    type="text" 
                                    className="form-control"
                                    placeholder={expModel.position} 
                                    id="position"
                                    name="position"
                                    onChange={e =>onChange(e)}/>
                         </div>
                     </div>

                            <div className="row sub-ptofile-form">
                                <div className="col-8">
                                    <label htmlFor="field">Location</label>
                                    <input 
                                            readOnly={expModel.readOnly}  
                                            type="text" 
                                            className="form-control" 
                                            placeholder={expModel.location}
                                            id="location"
                                            name="location"
                                            onChange={e =>onChange(e)}   />
                                </div>
                                <div className="col-2">
                                    <label htmlFor="from">From</label>
                                    <input 
                                            readOnly={expModel.readOnly}  
                                            type="text" 
                                            className="form-control" 
                                            placeholder={expModel.from} 
                                            id="from"
                                            name="from"
                                            onChange={e =>onChange(e)} 
                                    />
                                </div>
                                <div className="col-2">
                                    <label htmlFor="to">To</label>
                                    <input 
                                            readOnly={expModel.readOnly} 
                                            type="text" className="form-control" 
                                            placeholder={expModel.to} 
                                            id="to"
                                            name="to"
                                            onChange={e =>onChange(e)} />
                                </div>
                                <div className="col-2">
                                    <label htmlFor="to">description</label>
                                    <input 
                                            readOnly={expModel.readOnly}  
                                            type="text" 
                                            className="form-control" 
                                            placeholder={expModel.description}
                                            id="description"
                                            name="description"
                                            onChange={e =>onChange(e)}  
                                             />
                                </div>
                            </div>
                        <button type="submit" className="btn btn-outline-dark btn-register"> add</button>
                    </form>    
             </Fragment>          

        )
}
 const mapStateToProps = state => { 
   return { 
       singlPr: state.allProfile.profile,
       userPr:state.auth.user,
       isAuthenticated: state.auth.isAuthenticated
   }; 
}; 
export default connect(mapStateToProps,{ExpAction})(Expirianceitems);
