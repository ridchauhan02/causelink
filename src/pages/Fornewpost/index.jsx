import React ,{ useState, useEffect}from "react";
import axios from 'axios';

import { useNavigate ,useSearchParams, useParams } from "react-router-dom";

import { Button, Img, Switch, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const FornewpostPage = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const [title, settitle] = useState('');
  const [date, setdate] = useState('');
  const [commitment, setcommitment] = useState('');
  const [inpersonorremote, setinpersonorremote] = useState('');
  const [address, setaddress] = useState('');
  const [duration, setduration] = useState('');
  const [frequency, setfrequency] = useState('');
  const [mode, setmode] = useState('');
  const [note, setnote] = useState('');



  useEffect(() => {
    if (id) {
      const fetchUser = async () => {
        try {

      const response = await axios.get(`/api/users/${id}`);
      settitle(response.data.data[0].title);
      setdate(response.data.data[0].date);
      setcommitment(response.data.data[0].commitment);
      setinpersonorremote(response.data.data[0].inpersonorremote);
      setaddress(response.data.data[0].address);
      setduration(response.data.data[0].duration);
      setfrequency(response.data.data[0].frequency);
      setmode(response.data.data[0].mode);
      setnote(response.data.data[0].note);
      } catch (error) {
      console.error('Error fetching user:', error);
    }
  };

  fetchUser();
}
  },[id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = { title, date, commitment, inpersonorremote , address, duration , frequency , mode , note };

    try {
      if (id) {
        await axios.put(`/api/users/${id}`, newUser);
      } else {
        await axios.post('/api/users', newUser);
      }
      navigate('/users');
    } catch (error) {
      console.error('Error:',  error.response || error);
    }
  };


  return (
    <>
    <form onSubmit={handleSubmit}>

      <div className="bg-gray-900 flex flex-col font-judson items-center justify-start mx-auto pb-[86px] w-full">
        <Header className="bg-gray-600 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" />
        <Text
          className="mt-[21px] md:text-5xl text-[64px] text-white-A700"
          size="txtJudsonBold64"
        >
          New Post
        </Text>
        <div className="h-[1283px] md:h-[1289px] max-w-[1285px] mt-[7px] mx-auto md:px-5 relative w-full">
          <div className="bg-black-900 h-6 ml-auto mr-[179px] mt-[461px] w-6"></div>
          <div className="absolute bg-gray-600_01 flex flex-col gap-[52px] h-full inset-[0] items-center justify-center m-auto p-[60px] md:px-10 sm:px-5 rounded-[50px] w-full">
            <Text
              className="mt-0.5 sm:text-4xl md:text-[38px] text-[40px] text-white-A700"
              size="txtJudsonBold40"
            >
              {id ? 'Edit' : 'Add'}
              Post
            </Text>
            <div className="flex flex-col items-center justify-start w-[87%] md:w-full">
              <input

              type = "text"

              id="title"
            name="title"
            value={title}
            onChange={(e) => settitle(e.target.value)}
            required
                className="bg-white-A700 h-[74px] justify-center max-w-[1006px] md:max-w-full sm:px-5 px-[35px] py-[25px] rounded-[15px] text-black-900 text-shadow-ts2 text-xl w-full"
                size="txtJudsonRegular20Black900"
              placeholder="Title"
              >
              </input>
             
              <input
              type = "text"

              id="date"
            name="date"
            value={date}
            onChange={(e) => setdate(e.target.value)}
            required
                className="bg-white-A700 h-[74px] justify-center max-w-[1006px] md:max-w-full mt-[37px] pb-7 pt-[22px] sm:px-5 px-[35px] rounded-[15px] text-black-900 text-shadow-ts2 text-xl w-full"
                size="txtJudsonRegular20Black900"

            placeholder="Date"
              >
              </input>
              <input

              type = "text"

              id="commitment"
            name="commitment"
            value={commitment}
            onChange={(e) => setcommitment(e.target.value)}
            required
                className="bg-white-A700 h-[74px] justify-center max-w-[1006px] md:max-w-full mt-8 pb-7 pt-[22px] sm:px-5 px-[35px] rounded-[15px] text-black-900 text-shadow-ts2 text-xl w-full"
                size="txtJudsonRegular20Black900"
                placeholder="Commitment"
              >
                
              </input>
              <input

               type = "text"

              id="inpersonorremote"
            name="inpersonorremote"
            value={inpersonorremote}
            onChange={(e) => setinpersonorremote(e.target.value)}
            required
              
                className="bg-white-A700 h-[74px] justify-center max-w-[1006px] md:max-w-full mt-[37px] sm:px-5 px-[35px] py-[25px] rounded-[15px] text-black-900_01 text-shadow-ts2 text-xl w-full"
                size="txtJudsonRegular20Black90001"

                placeholder="In-Person or Remote"
              >
   
              </input>
              <input
              type = "text"

              id="address"
            name="address"
            value={address}
            onChange={(e) => setaddress(e.target.value)}
            required
                className="bg-white-A700 h-[74px] justify-center max-w-[1006px] md:max-w-full mt-[37px] pb-7 pt-[22px] sm:px-5 px-[35px] rounded-[15px] text-black-900_01 text-shadow-ts2 text-xl w-full"
                size="txtJudsonRegular20Black90001"
                placeholder="Address"
              >
                
              </input>
              <input
              type = "text"

              id="duration"
            name="duration"
            value={duration}
            onChange={(e) => setduration(e.target.value)}
            required
                className="bg-white-A700 h-[74px] justify-center max-w-[1006px] md:max-w-full mt-8 pb-7 pt-[22px] sm:px-5 px-[35px] rounded-[15px] text-black-900_01 text-shadow-ts2 text-xl w-full"
                size="txtJudsonRegular20Black90001"
                placeholder="Duration"
              >
                
              </input>
              <input

              type = "text"

              id="frequency"
            name="frequency"
            value={frequency}
            onChange={(e) => setfrequency(e.target.value)}
            required
                className="bg-white-A700 h-[74px] justify-center max-w-[1006px] md:max-w-full mt-8 sm:px-5 px-[35px] py-[25px] rounded-[15px] text-black-900_01 text-shadow-ts2 text-xl w-full"
                size="txtJudsonRegular20Black90001"
                placeholder="Frequency"
              >
                
              </input>
              <input
              type = "text"

              id="mode"
            name="mode"
            value={mode}
            onChange={(e) => setmode(e.target.value)}
            required
                className="bg-white-A700 h-[74px] justify-center max-w-[1006px] md:max-w-full mt-[29px] pb-7 pt-[22px] sm:px-5 px-[35px] rounded-[15px] text-black-900_01 text-shadow-ts2 text-xl w-full"
                size="txtJudsonRegular20Black90001"
                placeholder="mode"
              >
                
              </input>
              <input
              type = "text"

              id="note"
            name="note"
            value={note}
            onChange={(e) => setnote(e.target.value)}
            required
                className="bg-white-A700 h-[74px] justify-center max-w-[1006px] md:max-w-full mt-7 pb-[31px] pt-[19px] sm:px-5 px-[35px] rounded-[15px] text-black-900_01 text-shadow-ts2 text-xl w-full"
                size="txtJudsonRegular20Black90001"
                placeholder="Note"
              >
                
              </input>
              <Button 
              type="submit"
              className="common-pointer !text-gray-900_01 cursor-pointer font-bold leading-[normal] min-w-[176px] mt-[74px] rounded-[15px] shadow-bs text-3xl sm:text-[26px] md:text-[28px] text-center"
                
                color="white_A700"
                size="sm"
                variant="fill"
                onClick = {handleSubmit}
              >
                Post
              </Button>
            </div>
          </div>
        </div>
        <Footer className="bg-gray-600 flex items-center justify-center mt-12 md:px-5 w-full" />
      </div>

     </form> 
    </>
  );
};

export default FornewpostPage;
