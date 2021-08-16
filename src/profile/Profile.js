import React from "react";
import PropTypes from "prop-types"
const Profile=({fullName, bio, profession, children})=>{
    function handleName(){
        alert(fullName);
    }
    return(
        <div>
            <div>
                {children}
            </div>
            <div>
                <span onClick={handleName}>Full name: {fullName}</span>
            </div>
            <br>
            </br>
            <div>
                <span>Bio: {bio}</span>
            </div>
            <br>
            </br>
            <div>
                <span>Profession: {profession}</span>
            </div>
        </div>
    )
}
Profile.defaultProps={
    fullName:"Ali Mamdouh Mohamed Ali Salem",
    bio:"Bla bla bla bla bla",
    profession:"Software developer"
}
Profile.propTypes={
    fullName: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string
}
export default Profile;