import React, {Fragment,useState} from "react";
import "../../profile.scss"
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {EDAction} from '../../../../actions/allProfile'


const EducationItem=({items,EDAction})=>

{
     
    
    const [formData, setFormData] = useState({
        school: "",
        degree: "",
        fieldofstady: "",
        from: "",
        to:"",
        description: ""
    });
    const { school,degree,fieldofstady,from,to,description} = formData;

   const onChange = e =>{
           setFormData({ ...formData, [e.target.name]: e.target.value });
   }
    const onSubmit = e => {
        e.preventDefault();
        EDAction({school,degree,fieldofstady,from,to,description});
    };
       let  edModel={
        school: null,
        degree: null,
        fieldofstady:null,
        from: null,
        to:null,
        description: null,
        readOnly:false
    }
        if (items)
        { 
            edModel.readOnly=true
            if (items.degree){edModel.degree=items.degree} else {edModel.degree='no data'}
            if (items.school){edModel.school=items.school} else {edModel.school='no data'}
            if (items.fieldofstady){edModel.fieldofstady=items.fieldofstady} else {edModel.fieldofstady='no data'}
            if (items.description){edModel.description=items.description} else {edModel.description='no data'}
            if (items.from){edModel.from=items.from} else {edModel.from='no data'}
            if (items.current){edModel.to="curent"} else 
                {if (items.to){
                    edModel.to=items.to}else {edModel.to='no data'}}
        }
        else
         {
             edModel.readOnly=false
             edModel.degree="degree"
             edModel.school="school"
             edModel.fieldofstady="fieldofstady"
             edModel.from="YYYY-MM-DD"
             edModel.to="YYYY-MM-DD"
             edModel.description="description"

         }
        return(
            <Fragment>
            <form onSubmit={(e) =>onSubmit(e)}>
                <div>Education</div>
                     <div className="row">
                         <div className="col">
                             <label htmlFor="name">school</label>
                             <input 
                                    readOnly={edModel.readOnly}   
                                    type="text" 
                                    className="form-control" 
                                    placeholder={edModel.school}
                                    id="school"
                                    name="school"
                                    onChange={e =>onChange(e)}
                                     required
                                     />
                          </div>
                             <div className="col">
                              <label htmlFor="name">degree</label>
                              <input 
                                    readOnly={edModel.readOnly}  
                                    type="text" 
                                    className="form-control"
                                    placeholder={edModel.degree} 
                                    id="degree"
                                    name="degree"
                                    onChange={e =>onChange(e)}/>
                         </div>
                     </div>

                            <div className="row sub-ptofile-form">
                                <div className="col-8">
                                    <label htmlFor="field">fieldofstady</label>
                                    <input 
                                            readOnly={edModel.readOnly}  
                                            type="text" 
                                            className="form-control" 
                                            placeholder={edModel.fieldofstady}
                                            id="fieldofstady"
                                            name="fieldofstady"
                                            onChange={e =>onChange(e)}   />
                                </div>
                                <div className="col-2">
                                    <label htmlFor="from">From</label>
                                    <input 
                                            readOnly={edModel.readOnly}  
                                            type="text" 
                                            className="form-control" 
                                            placeholder={edModel.from} 
                                            id="from"
                                            name="from"
                                            onChange={e =>onChange(e)} 
                                    />
                                </div>
                                <div className="col-2">
                                    <label htmlFor="to">To</label>
                                    <input 
                                            readOnly={edModel.readOnly} 
                                            type="text" className="form-control" 
                                            placeholder={edModel.to} 
                                            id="to"
                                            name="to"
                                            onChange={e =>onChange(e)} />
                                </div>
                                <div className="col-2">
                                    <label htmlFor="to">description</label>
                                    <input 
                                            readOnly={edModel.readOnly}  
                                            type="text" 
                                            className="form-control" 
                                            placeholder={edModel.description}
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
export default connect(mapStateToProps,{EDAction})(EducationItem);
