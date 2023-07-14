import React, { useState } from 'react';
import { TextInput } from 'components/Atoms/Inputs'
import { Button } from 'components/Atoms/Buttons'
import styles from "./ImageUploader.module.scss";
import axios from 'axios';

const ImageUploader = ({
    setImageURL=()=>{}, 
    setImageInfo=()=>{}
}) => {
    const [image, setImage] = useState('');
    const [inputURL, setInputURL] = useState('');
    const [loading, setLoading] = useState(false);

    const uploadImage = e => {
        const files = e.target.files[0];
        const formData = new FormData();
        formData.append("upload_preset", "pafpay")
        formData.append("file", files) 
        setLoading(true);

        // TODO: temp image set
            // setImage(files.name)
            // setImageURL(files.name)
            // setLoading(false)
            setImageInfo({
                name: "images",
                value: files.name
            })

        // TODO: setup cloudinary
        axios.post(`${process.env.REACT_APP_CLOUDINARY_URL}`, formData)
            .then(res=> {
                const resUrl = res.data.secure_url;
                const formatURL = resUrl.split('/upload/');
                const url780 = `${formatURL[0]}/upload/c_scale,w_780,ar_1:1,c_fill/${formatURL[1]}`
                setImage(url780);
                setImageURL(url780);
            })
            .then(res => {
                console.log('image-upload-res-->: ', res)
                setLoading(false)
            })
            .catch(err=> console.log(err))
    }

    const onInputUrlChange = (e) => {
        setInputURL(e.target.value)
    }

    const onSubmitInputURL = () => {
        setImage(inputURL)
        setImageURL(inputURL)
        setInputURL('')
    }

return (
    <div className={styles.dropbox}>
        <div>
            <div className={styles.inputUrlWrap}>
                <TextInput
                    label="URL"
                    value={inputURL}
                    onChange={(e)=> setInputURL(e.target.value)}
                />
                <Button 
                    disabled={!inputURL}
                    onClick={onSubmitInputURL}
                    label="SUBMIT"
                    />
            </div>
            <input
                type="file"
                name="file"
                placeholder="Upload an image"
                onChange={ uploadImage } 
            />
        </div>
        {
            loading ? (
                <h2>Loading image...</h2>
            ): (
                <img src={ image } alt={ image } style={{ width: "100px" }} />
            )
        }
    </div>
)};

export default ImageUploader;
