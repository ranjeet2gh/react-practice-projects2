import { useEffect, useState } from 'react';
import axiosInstance from '../../axios/axiosInstance';
import moment from 'moment';

const GetMeetingLink = ({ diffMin }) => {
    const [data, setData] = useState(null);
    const [saveDiffMin, setSaveDiffMin] = useState(diffMin);

    const fetchMeetingLink = async () => {
        try {
            const response = await axiosInstance.get('/form/get-meeting-link');
            setData(response.data);
            if (response?.data?.start) {
                setSaveDiffMin(moment(response?.data?.start).diff(moment(), 'minute'));
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchMeetingLink();

        const intervalId = setInterval(fetchMeetingLink, 30000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div>
            {saveDiffMin <= 10 ? (
                <button onClick={(e) => window.open(data?.meetingLink, '_blank')} className='login-btn'>
                    Join Meeting
                </button>
            ) : (
                <p>{`Join Meeting in ${Math.floor(saveDiffMin / 60)} hours and ${saveDiffMin % 60} minutes`}</p>
            )}
        </div>
    );
};

export default GetMeetingLink;
