import React, { Fragment, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { newTest} from '../../../actions/test.actions'
import { NEW_TEST_RESET } from '../../../actions/constantes'
// import BannerImage from '../../assets/interior.jpg'
import './NewProduct.css'
import { Link } from 'react-router-dom'
const NewTest = ({ history }) => {
    const dispatch = useDispatch();

  
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState('');
  
    const [stock, setStock] = useState(0);
    
    const [images, setImages] = useState([]);
    const [imagesPreview, setImagesPreview] = useState([])

   

   



    const { loading, error, success } = useSelector(state => state.newTest);

    useEffect(() => {

        if (error) {
            alert(error);
            
        }

        if (success) {
            // history.push('/coachs');
            <Link to="/tr">Test</Link>
            console.log('Test created successfully');
            dispatch({ type: NEW_TEST_RESET })
        }

    }, [dispatch, alert, error, success, history])

    const submitHandler = (e) => {
        e.preventDefault();

        const formData = {
            name:name,
            description:description,
            images:images

        }
        
      
        
        // const newProductData ={
        // name : name,
        // price : price , 
        // description : description , 
        // stock : stock ,
        // images : ""}

        dispatch(newTest(formData))
    }

    const onChange = e => {

        const files = Array.from(e.target.files)

        setImagesPreview([]);
        setImages([])

        files.forEach(file => {
            const reader = new FileReader();

            reader.onload = () => {
                if (reader.readyState === 2) {
                    setImagesPreview(oldArray => [...oldArray, reader.result])
                    setImages(oldArray => [...oldArray, reader.result])
                }
            }

            reader.readAsDataURL(file)
        })
    }


    return (
        <>
            
            {/* <div className="row" style={{backgroundImage:'url('+BannerImage+')'}}> */}
            <div>
                <div className="col-12 col-md-2">
                    
                </div>

                <div className="col-12 col-md-10">
                    <Fragment>
                        <div className="wrapper my-5">
                            <form className="shadow-lg" onSubmit={submitHandler} encType='multipart/form-data'>
                              <h1 className="mb-4">New Test</h1>

                              <div className='form-group'>
                                    <label>Choose Image</label>

                                    <div className='custom-file'>
                                        <input
                                            type='file'
                                            name='product_images'
                                            className='custom-file-input form-control'
                                            id='customFile'
                                            onChange={onChange}
                                            multiple
                                        />
                                    </div>

                                    {imagesPreview.map(img => (
                                        <img src={img} key={img} alt="Images Preview" className="mt-3 mr-2" width="55" height="52" />
                                    ))}

                                </div>

                                <div className="form-group">
                                
                                    <label htmlFor="name_field">Name</label>
                                    <input
                                        type="text"
                                        id="name_field"
                                        className="form-control"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>

                                

                                <div className="form-group">
                                    <label htmlFor="description_field">Description</label>
                                    <textarea className="form-control" id="description_field" rows="8" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                                </div>


                                <button
                                    id="login_button"
                                    onClick={submitHandler}
                                    className="btn btn-block py-3"
                                    disabled={loading ? true : false}
                                >
                                    CREATE
                                </button>

                            </form>
                        </div>
                    </Fragment>
                </div>
            </div>

        </>
    )
}

export default NewTest
