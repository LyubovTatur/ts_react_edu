// @ts-ignore
import React, {useRef} from 'react';

interface FileUploadProp {
    setFile: Function;
    accept: string;
}

const FileUploader: React.FC<FileUploadProp> = ({ setFile, accept, children}) => {
    const ref = useRef<HTMLInputElement>()
    const onChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setFile(e.target.files[0])
    }
    return (
        <div onClick={()=>ref.current.click()}>
            <input
                type="file"
                accept={accept}
                style={{display: 'none'}}
                ref={ref}
                onChange={onChange}
            />
            {children}
        </div>
    );
};

export default FileUploader;