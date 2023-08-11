import React, { Fragment, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

// import Sidebar from './Sidebar'


import { useDispatch, useSelector } from 'react-redux'
import { updateTest, getTestDetails} from '../../../actions/test.actions'
import { UPDATE_TEST_RESET } from '../../../actions/constantes'
import {useNavigate} from 'react-router-dom'; 


const UpdateTest = ({  history }) => {
    const navigate = useNavigate(); 


    const [name, setName] = useState('');
    
    const [description, setDescription] = useState('');
   
    //const [stock, setStock] = useState(0);
    const [images, setImages] = useState([]);

    const [oldImages, setOldImages] = useState([]);
    const [imagesPreview, setImagesPreview] = useState([])


   
    const dispatch = useDispatch();
    const {id} = useParams()
    const { error, test } = useSelector(state => state.testDetails)
    const { loading, error: updateError, isUpdated } = useSelector(state => state.test);

    const testId = id;

    useEffect(() => {

        if (test && test._id !== testId) {
            dispatch(getTestDetails(testId));
        } else {
            setName(test.name);
            //setPrice(test.price);
            setDescription(test.description);
            
            //setStock(product.stock)
            setOldImages(test.images)
        }

        if (error) {
            alert(error);
            
        }

       


        if (isUpdated) {
            navigate('/admin/tests');
            alert('Test updated successfully');
            dispatch({ type: UPDATE_TEST_RESET })
        }

    }, [dispatch, alert, error, isUpdated, history,  test, testId])


    const submitHandler = (e) => {
        e.preventDefault();

        const formData = {
            name:name,
            description:description,
            images:images

        }

        dispatch(updateTest(test._id, formData))
    }

    const onChange = e => {

        const files = Array.from(e.target.files)

        setImagesPreview([]);
        setImages([])
        setOldImages([])

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
        <Fragment>
            
            <div className="row">
                <div className="col-12 col-md-2">
                    {/* <Sidebar /> */}
                </div>

                <div className="col-12 col-md-10">
                    <Fragment>
                        <div className="wrapper my-5">
                            <form className="shadow-lg" onSubmit={submitHandler} encType='multipart/form-data'>
                                <h1 className="mb-4">Update Test</h1>

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

                                {/* <div className="form-group">
                                    <label htmlFor="price_field">Price</label>
                                    <input
                                        type="text"
                                        id="price_field"
                                        className="form-control"
                                        value={price}
                                        onChange={(e) => setPrice(e.target.value)}
                                    />
                                </div> */}

                                <div className="form-group">
                                    <label htmlFor="description_field">Description</label>
                                    <textarea className="form-control" id="description_field" rows="8" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                                </div>

                               
                                {/* <div className="form-group">
                                    <label htmlFor="stock_field">Stock</label>
                                    <input
                                        type="number"
                                        id="stock_field"
                                        className="form-control"
                                        value={stock}
                                        onChange={(e) => setStock(e.target.value)}
                                    />
                                </div> */}

                                

                                <div className='form-group'>
                                    <label>Images</label>

                                    <div className='custom-file'>
                                        <input
                                            type='file'
                                            name='product_images'
                                            className='custom-file-input'
                                            id='customFile'
                                            onChange={onChange}
                                            multiple
                                        />
                                        <label className='custom-file-label' htmlFor='customFile'>
                                            Choose Images
                                 </label>
                                    </div>

                                    {oldImages && oldImages.map(img => (
                                        <img key={img} src={img.url} alt={img.url} className="mt-3 mr-2" width="55" height="52" />
                                    ))}

                                    {imagesPreview.map(img => (
                                        <img src={img} key={img} alt="Images Preview" className="mt-3 mr-2" width="55" height="52" />
                                    ))}

                                </div>


                                <button
                                    id="login_button"
                                    type="submit"
                                    className="btn btn-block py-3"
                                    disabled={loading ? true : false}
                                >
                                    UPDATE
                            </button>

                            </form>
                        </div>
                    </Fragment>
                </div>
            </div>

        </Fragment>
    )
}

export default UpdateTest
