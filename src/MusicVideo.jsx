import React from 'react';


const MusicVideo = (props) => {
    const { name, length, uploader, views } = props;

    let changingText = '';

    if(length > 600 || views < 100000){
        changingText = 'This is not the real music video';
    }else{
        changingText = 'This is the real music video';
    }

    return (
        <div>
            <h6>
                {`this videos name is: ${name} and its length is ${length}
                 it was released by ${uploader} and its view count is ${views}`}

                {`is this the real music video? ${changingText}`}
            </h6>
        </div>
            
        
    );
};



export default MusicVideo;