import React, { useEffect, useState } from 'react'
import axiosInstance from '../../axios/axiosInstance';
import "../Login/index.css"
import moment from 'moment'
import GetMeetingLink from './getMeetingLink';


const PersonalInfo = () => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [gender, setGender] = useState("");
    const [loading, setloading] = useState('idle')
    const [diffMin, setDiffMin] = useState(0)

    const [address, setAddress] = useState("");
    async function getFormStatus() {
        const response = await axiosInstance.get('/form/get-form-status');
        return response
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axiosInstance.post("/form/personal-info", { username, email, contact, gender, address })
        let diffMin = moment(response.data.start).diff(moment(), 'minute')
        setDiffMin(diffMin)
        getFormStatus().then(data => {
            if (!data.data.formStatus) {
                setloading(false)
            } else {
                setloading(true)
                setDiffMin(moment(data.data.start).diff(moment(), 'minute'))
            }

        })

    };
    useEffect(() => {
        getFormStatus().then(data => {
            if (!data.data.formStatus) {
                setloading(false)
            } else {
                setloading(true)
                setDiffMin(moment(data.data.start).diff(moment(), 'minute'))
            }

        })
    }, [])
    return (
        <div className="">
            {loading === true ? <div><h3>Form Already submited</h3> <GetMeetingLink diffMin={diffMin} /></div> :
                loading === 'idle' ? <div>Loading</div> :
                    <div>
                        <h1>Personal Information</h1>
                        <fieldset>
                            <form action="#" method="get">
                                <div className="onebox">
                                    <label for="candidatename">
                                        Candidate Name*
                                    </label>
                                    <input
                                        type="text"
                                        name="candidatename"
                                        id="candidatename"
                                        value={username}
                                        onChange={(e) =>
                                            setUsername(e.target.value)
                                        }
                                        placeholder="Enter candidate Name"
                                        required
                                    />

                                </div>
                                <label for="email">Enter Email* </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) =>
                                        setEmail(e.target.value)
                                    }
                                    placeholder="Enter email"
                                    required
                                />
                                <label for="tel">Contact*</label>
                                <input
                                    type="tel"
                                    name="contact"
                                    id="contact"
                                    value={contact}
                                    onChange={(e) =>
                                        setContact(e.target.value)
                                    }
                                    placeholder="Enter Mobile number"
                                    maxlength="10" pattern="[1-9]{1}[0-9]{9}"
                                    required
                                />
                                <label for="gender">Gender*</label>
                                <div className='d-flex justify-content-around'>
                                    <div>
                                        <input
                                            type="radio"
                                            name="gender"
                                            value="male"
                                            id="male"
                                            checked={gender === "male"}
                                            onChange={(e) =>
                                                setGender(e.target.value)
                                            }
                                        />
                                        Male
                                    </div>
                                    <div>
                                        <input
                                            type="radio"
                                            name="gender"
                                            value="female"
                                            id="female"
                                            checked={gender === "female"}
                                            onChange={(e) =>
                                                setGender(e.target.value)
                                            }
                                        />
                                        Female
                                    </div>
                                    <div>
                                        <input
                                            type="radio"
                                            name="gender"
                                            value="other"
                                            id="other"
                                            checked={gender === "other"}
                                            onChange={(e) =>
                                                setGender(e.target.value)
                                            }
                                        />
                                        Other

                                    </div>
                                </div>


                                <label for="address">Enter Your Address</label>
                                <textarea
                                    name="address"
                                    id="address"
                                    cols="30"
                                    rows="1"
                                    onChange={(e) =>
                                        setAddress(e.target.value)
                                    }
                                    placeholder="Enter Your address "
                                    required
                                ></textarea>
                                <button
                                    type="submit"
                                    value="Submit"
                                    className='login-btn'
                                    onClick={(e) => handleSubmit(e)}
                                >
                                    Submit
                                </button>
                            </form>
                        </fieldset>
                    </div>
            }
        </div>
    )
}

export default PersonalInfo
