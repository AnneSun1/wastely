import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import './styles/DropFileInput.css';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import { NavLink } from 'react-router';

const DropFileInput = props => {
    const wrapperRef = useRef(null);

    const [fileList, setFileList] = useState([]);
    const [file, setFile] = useState();

    const onDragEnter = () => wrapperRef.current.classList.add('dragover');

    const onDragLeave = () => wrapperRef.current.classList.remove('dragover');

    const onDrop = () => wrapperRef.current.classList.remove('dragover');

    const onFileDrop = (e) => {
        const newFile = e.target.files[0];
        console.log(newFile)
        if (newFile) {
            const updatedList = [...fileList, newFile];
            setFileList(updatedList);
            setFile(newFile);
            props.onFileChange(updatedList);
        }
    }

    const fileRemove = (file) => {
        const updatedList = [...fileList];
        updatedList.splice(fileList.indexOf(file), 1);
        setFileList(updatedList);
        // props.onFileChange(updatedList);
    }

    return (
        <>
            <div className="drop-file-input" onDragEnter={onDragEnter} onDragLeave={onDragLeave} onDrop={onDrop} ref={wrapperRef}>
                <div className="drop-file-input__label">
                    <CloudUploadIcon fontSize="large"/>
                    <p>Drag & Drop your image here</p>
                </div>
                <input type="file" value="" onChange={onFileDrop} />
            </div>
            { fileList.length > 0 ? (
                <div className="drop-file-preview">
                    { 
                        fileList.map((item, index) => (
                            <div key={index} className="drop-file-preview__item">
                                <InsertDriveFileIcon />
                                <div className="drop-file-preview__item__info">{item.name}</div>
                                <div className="drop-file-preview__item__del" onClick={() => fileRemove(item)}>x</div>
                            </div> 
                    ))}
                </div> 
            ) : null}
            <button onClick={() => { props.uploadImage(file) }}>Upload</button>
        </>
    );
}

DropFileInput.propTypes = {
    onFileChange: PropTypes.func,
    uploadImage: PropTypes.func
}

export default DropFileInput;