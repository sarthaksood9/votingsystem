import { useEffect, useState } from "react";

import { RxCross2 } from "react-icons/rx"
import { BiSave } from "react-icons/bi"
import { MdOutlineCancel } from "react-icons/md"

export function DeleteModel({ mod }) {
    const [loader, setLoader] = useState(false);


    return (
        <div
            className="h-full w-full flex justify-center items-center fixed top-0 left-0 z-30"
            onClick={() => {
                mod();
            }}
            style={{ backgroundColor: "rgba(0,0,0,0.7)" }}
        >
            <div onClick={(e) => e.stopPropagation()} className="w-[80%] md:w-[60%] custon-shadow rounded-2xl px-10 bg-white flex flex-col p-2 xxxs:px-6 md:py-8 lg:py-12 py-8 gap-10  modelAnimation" >
                <div className="flex w-full justify-between h-fit items-center relative">
                    <h1 className="md:text-3xl ss:text-2xl xxs:text-xl text-lg sm:mr-5 font-[500] text-[#ff054f]">
                        Confirm Delete This Project Permanently!
                    </h1>
                    <RxCross2
                        className="xxs:relative sm:absolute absolute text-[2rem] xxxs:text-[2rem] xxs:text-[4rem] ss:text-[50px] sm:text-[2rem] sm:top-[-1rem] sm:right-[-0.5rem] cursor-pointer top-[-1rem] xxs:top-[-1rem] md:top-[-1.8rem] right-[-0.5rem] xxs:right-0"
                        onClick={() => {
                            mod();
                        }}
                    />
                </div>
                <p className="text-[14px] text-[#8f8f8f] font-[500]">
                    <b>NOTE-</b>&nbsp;Once your account is deletey can not be recovered
                    back conform if you want to delete your account permanently
                </p>
                <div className="flex w-full gap-2 xs:gap-5">
                    <button disabled={loader} onClick={() => { mod() }} className="border-[#ff054f] w-fit border-[1px] rounded-[7px] py-[3px] px-[10px] xxxs:px-[14px] text-[#ff054f] text-[11px] xxxs:text-[14px] md:text-[16px] font-[500] hover:bg-[#ff054f] hover:text-[white] transition-colors  ">
                        Delete Premanently
                    </button>
                    <button
                        onClick={() => {
                            mod();
                        }}
                        className="border-[#ff054f] w-fit border-[1px] rounded-[7px] py-[3px] px-[10px] text-[#ff054f] text-[11px] xxxs:text-[14px] md:text-[16px] font-[500] hover:bg-[#ff054f] hover:text-[white] transition-colors "
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
}

export function EditVote({ mod }) {

    const [projectname, setProjectname] = useState("");
    const [deadline, setDeadline] = useState("");
    const [projectDiscriptaion, setProjectDiscriptaion] = useState("");

    const list=["Sarthak","mridul","Saksham","Shukla"]
    return (
        <div
            className="h-full w-full flex justify-center items-center fixed top-0 left-0 z-30"
            onClick={() => {
                mod();
            }}
            style={{ backgroundColor: "rgba(0,0,0,0.7)" }}
        >
            <div
                className="bg-white w-[90%] xxxs:w-[85%] md:w-[70%] max-h-[90vh] overflow-y-auto px-4 py-8 custom-shadow rounded-2xl flex gap-1  items-center flex-col modelAnimation"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex justify-between w-[90%] items-center relative">
                    <h1 className="lg:text-4xl md:text-3xl text-2xl font-[500] text-[#001063]">
                        Edit Vote Information
                    </h1>
                    <RxCross2
                        className="xxs:static sm:absolute text-2xl sm:top-1 sm:float-right cursor-pointer relative top-0 right-[-1rem]"
                        onClick={() => {
                            mod();
                        }}
                    />
                </div>
                <div className="w-[100%] flex flex-col md:flex-row border-none h-fit items-center md:items-start mt-4">
                    <div className="w-[90%] md:w-[50%] flex flex-col justify-center items-center gap-1 xxxs:gap-6">
                        <div className="w-full md:w-[80%]">
                            <label
                                htmlFor="message"
                                className="block text-gray-700 text-sm font-bold mb-2"
                            >
                                Poll Name
                            </label>
                            <textarea
                                name="message"
                                value={projectname}
                                onChange={(e) => { setProjectname(e.target.value) }}
                                className=" text-[0.9rem] h-[3rem]  resize-none border border-gray-300 rounded-md px-4 py-3 block w-full focus:outline-none focus:ring-[#001063] focus:border-[#001063] "
                            ></textarea>
                        </div>

                    </div>
                    <div className="w-[90%] md:w-[50%] flex flex-col gap-6 mt-4 md:mt-0">
                        <div className="w-full md:w-[80%]">
                            <label
                                htmlFor="message"
                                className="block text-gray-700 text-sm font-bold mb-2"
                            >
                                End At
                            </label>
                            <input
                                type="date"
                                name="message"
                                value={deadline}
                                onChange={(e) => { setDeadline(e.target.value) }}
                                rows="2"
                                className=" text-[0.9rem] h-[3rem] resize-none border border-gray-300 rounded-md px-4 py-3 block w-full focus:outline-none focus:ring-[#001063] focus:border-[#001063] "
                            />
                        </div>
                        {/* <div class="w-full md:w-[80%]">
                  <label for="message" className="block text-gray-700 text-sm font-bold mb-2">Country</label>
                  <textarea name="message" rows='2' className=" text-[0.9rem]  resize-none border border-gray-300 rounded-md px-4 py-2 block w-full focus:outline-none focus:ring-[#001063] focus:border-[#001063] "></textarea>
                </div> */}
                    </div>
                </div>

                <div className="w-[89%] mt-4 md:mt-4">
                    <label
                        htmlFor="message"
                        className="block text-gray-700 text-sm font-bold mb-2"
                    >
                        Edit Description
                    </label>
                    <textarea
                        name="message"
                        rows="4"
                        value={projectDiscriptaion}
                        onChange={(e) => { setProjectDiscriptaion(e.target.value) }}
                        className=" resize-none border border-gray-300 rounded-md py-2 px-4 block w-full focus:outline-none focus:ring-[#001063] focus:border-[#001063] textarea"
                    ></textarea>
                </div>

               

                

                <div className="w-[90%] md:w-[90%] mt-8 md:mt-2">
                    <label
                        for="message"
                        className="block text-gray-700 text-sm font-bold mb-2"
                    >
                        Mambers
                    </label>

                    <div className="flex items-start justify-start flex-row gap-4 w-[90%] ">
                    {list.map((item, index) => (
                        <>
                            <div className="flex items-start justify-start gap-4 h-full">
                                <div className="flex items-center flex-row justify-center px-5 py-2 rounded-full relative bg-[#D9D9D9]">
                                    <div className="flex items-center justify-start ">
                                        <p className="text-sm font-medium">{item}</p>
                                    </div>
                                        <RxCross2 className="absolute top-[-0.25rem] right-[-0.15rem]"/>
                                </div>
                            </div>
                        </>
                    ))}
                    
                    </div>
                    <button

                        className="bg-[#001063] mt-5 self-end  px-2 py-1 md:px-3 md:py-3 flex justify-center items-center text-white gap-[6px] rounded-xl text-[12px] transition-colors "
                    >
                         ADD More +
                    </button>
                    
                </div>

                <div className="flex gap-8 mt-8 px-16 w-full justify-center md:justify-end">
                    <button
                        onClick={() => {
                            mod();
                        }}
                        className="hover:bg-[#001063] hover:text-white border-[1px] transition-all transition-1 border-[#001063] px-2 py-1 md:px-3 md:py-3 flex justify-center items-center text-[#001063] gap-[6px] rounded-xl  text-[12px]"
                    >
                        <MdOutlineCancel size={20} /> Discard
                    </button>
                    <button

                        className="bg-[#001063]  px-2 py-1 md:px-3 md:py-3 flex justify-center items-center text-white gap-[6px] rounded-xl text-[12px] transition-colors "
                    >
                        <BiSave size={20} /> Save the changes
                    </button>
                </div>
            </div>
        </div>
    )
}



// export function Modelform({mod}) {
//     const [voteName, setVoteName] = useState();
//     const [discription, setDiscription] = useState();
//     const [endTime, setEndTime] = useState();
    
    

//     return (
//         <div
//             className="h-full p-4 w-full flex justify-center items-center fixed top-0 left-0 z-30"
//             onClick={() => {
//                 mod();
//             }}
//             style={{ backgroundColor: "rgba(0,0,0,0.7)" }}
//         >
//             <div
//                 className="bg-white max-h-[90vh] md:h-auto w-[80%] overflow-y-auto remove-scroll md:w-[70%] p-4 py-8 custom-shadow rounded-2xl flex gap-2 items-center flex-col modelAnimation"
//                 onClick={(e) => e.stopPropagation()}
//             >
//                 <div className="flex justify-between h-fit w-[90%] items-center relative">
//                     <h1 className="lg:text-4xl md:text-3xl text-2xl font-[500] text-[#001063]">
//                         Edit Poll
//                     </h1>
//                     <RxCross2
//                         className="xxs:static sm:absolute text-2xl sm:top-1 sm:float-right cursor-pointer relative top-0 right-[-1rem]"
//                         onClick={() => {
//                             mod();
//                         }}
//                     />
//                 </div>

//                 <div className="w-full grid md:grid-cols-2 gap-1 grid-cols-1 border-none h-fit items-center md:items-start mt-4">
//                     <div className="w-[90%] md:w-auto grid-cols-1 flex flex-col justify-center items-center gap-6">
//                         <div className="w-full md:w-[80%]">
//                             <label
//                                 for="message"
//                                 className="block text-gray-700 text-sm font-bold mb-2"
//                             >
//                                 Phone Number
//                             </label>
//                             {/* <PhoneInput country={'us'} containerClass='w-full! border-2!' value={phoneNumberValue} onChange={phone => {
//                                 setPhoneNumberValue(phone);
//                                 setIsChanges(true);
//                             }} /> */}
//                             {/* <textarea
//                                 name="number"
//                                 value={phoneNumberValue}
//                                 onChange={phoneValueChange}
//                                 className=" text-[0.9rem] h-[3rem] resize-none border border-gray-300 rounded-md px-4 py-3 block w-full focus:outline-none focus:ring-[#001063] focus:border-[#001063] "
//                             ></textarea> */}
//                         </div>
//                         <div className="w-full md:w-[80%]">
//                             <label
//                                 for="message"
//                                 className="block text-gray-700 text-sm font-bold mb-2"
//                             >
//                                 Your City
//                             </label>
//                             <textarea
//                                 name="message"
//                                 value={cityValue}
//                                 onChange={cityValueChange}
//                                 className=" text-[0.9rem] h-[3rem] resize-none border border-gray-300 rounded-md px-4 py-3 block w-full focus:outline-none focus:ring-[#001063] focus:border-[#001063] "
//                             ></textarea>
//                         </div>
//                     </div>
//                     <div className="w-[90%] md:w-auto grid-cols-1 flex flex-col gap-6 mt-6 md:mt-0">
//                         <div className="w-full md:w-[80%]">
//                             <label
//                                 for="message"
//                                 className="block text-gray-700 text-sm font-bold mb-2"
//                             >
//                                 Vote Name
//                             </label>
//                             <textarea
//                                 name="message"
//                                 value={voteName}
//                                 onChange={(e)=>{setVoteName(e.target.value)}}
//                                 rows="2"
//                                 className=" text-[0.9rem] h-[3rem] resize-none border border-gray-300 rounded-md px-4 py-3 block w-full focus:outline-none focus:ring-[#001063] focus:border-[#001063] "
//                             ></textarea>
//                         </div>
//                         <div className="w-full md:w-[80%]">
//                             <label
//                                 for="message"
//                                 className="block text-gray-700 text-sm font-bold mb-2"
//                             >
                                
//                             </label>
//                             <textarea
//                                 name="message"
//                                 value={countryValue}
//                                 onChange={countryValueChange}
//                                 rows="2"
//                                 className=" text-[0.9rem] h-[3rem] resize-none border border-gray-300 rounded-md px-4 py-3 block w-full focus:outline-none focus:ring-[#001063] focus:border-[#001063] "
//                             ></textarea>
//                         </div>
//                     </div>
//                     <div className="w-[90%] md:w-auto grid-cols-1 flex flex-col justify-center items-center gap-6 mt-5">
//                         <div className="w-full md:w-[80%]">
//                             <label
//                                 for="message"
//                                 className="block text-gray-700 text-sm font-bold mb-2"
//                             >
//                                 Your Address
//                             </label>
//                             <textarea
//                                 name="message"
//                                 value={addressValue}
//                                 onChange={addressValueChange}
//                                 className=" text-[0.9rem] h-[3rem] resize-none border border-gray-300 rounded-md px-4 py-3 block w-full focus:outline-none focus:ring-[#001063] focus:border-[#001063] "
//                             ></textarea>
//                         </div>
//                     </div>
//                     <div class="w-[90%] md:w-[80%] mt-5">
//                         <label
//                             for="message"
//                             className="block text-gray-700 text-sm font-bold mb-2"
//                         >
//                             Availablity
//                         </label>
//                         <select
//                             name="message"
//                             rows="2"
//                             value={availabilityValue}
//                             id="EduGrade"
//                             onChange={handleAvailabilityChange}
//                             className=" text-[0.9rem] h-[3rem]  resize-none border border-gray-300 rounded-md px-4 py-2 block w-full focus:outline-none focus:ring-[#001063] focus:border-[#001063] "
//                         >
//                             <option selected value="Available">Available</option>
//                             <option value="Unavailable">Unavailable</option>
//                         </select>
//                     </div>
//                     <div className="w-[90%] md:w-auto grid-cols-1 flex flex-col justify-center items-center gap-6 mt-5">
//                         <div className="w-full md:w-[80%]">
//                             <label
//                                 for="message"
//                                 className="block text-gray-700 text-sm font-bold mb-2"
//                             >
//                                 Your Calendly Url
//                             </label>
//                             <input
//                                 name="calendlyUrl"
//                                 value={calendlyUrlValue}
//                                 placeholder="Please enter your calendly url"
//                                 onChange={(e) => {
//                                     setCalendlyUrlValue(e.target.value);
//                                     setIsChanges(true);
//                                 }}
//                                 className="text-[0.9rem] h-[3rem] resize-none border border-gray-300 rounded-md px-4 py-3 block w-full focus:outline-none focus:ring-[#001063] focus:border-[#001063] "
//                             />
//                         </div>
//                     </div>
//                 </div>
//                 <div className="flex gap-4 mb-3 md:gap-8 mt-8 px-8 md:px-16 w-full justify-center ss:flex-row flex-col md:justify-end">
//                     <button
//                         onClick={() => {
//                             mod();
//                         }}
//                         className="hover:bg-[#001063] hover:text-white border-[1px] transition-all transition-1 border-[#001063] px-3 py-3 flex justify-center items-center text-[#001063] gap-[6px] rounded-xl  text-[12px]"
//                     >
//                         <MdOutlineCancel size={20} /> Discard
//                     </button>
//                     <button
//                         disabled={loader}
//                         onClick={() => {
//                             handleProfileFormChange();
//                         }}
//                         className="bg-[#001063] px-3 py-3 flex justify-center items-center text-white gap-[6px] rounded-xl text-[12px] transition-colors "
//                     >
//                         <BiSave size={20} /> Save the changes
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// }





export function EditTask({ mod }) {



    const date = new Date;
  
  
  
    const [taskName, setProjectname] = useState();
    const [deadline, setDeadline] = useState();
    const [status, setStatus] = useState("done");
    const [taskDiscriptaion, setProjectDiscriptaion] = useState();
    const [pills, setPills] = useState(new Set());
    
    const [suggestion, setSuggestion] = useState([]);
    const [assiengedTo, setAssiengedTo] = useState("");
    const [seclectedEmpId,setSeclectedEmpId]=useState(new Set([]))
  
    // console.log(formData.assignedId);
    
    
    
    
    const removePill = (pill) => {
      const newPills = Array.from(pills).filter(i => i !== pill);
  
      setPills(newPills);
    }
  
  
  
    useEffect(() => {
  
      const fetchEmployee = async () => {
  
        if (assiengedTo.trim() === "") {
          setSuggestion([]);
          return;
        }
  
  
        
            setSuggestion(["Sarthak","Mridul","Saksham"]);
          
      };
  
  
  
      fetchEmployee();
  
  
  
    }, [assiengedTo])
  
  
    const updatepPills = (user) => {
      const newset = new Set(pills);
      newset.add(user);
      setPills(newset);
    }
  
  
  
    // const handleUpdate = () => {
    //   axios.put("http://localhost:4000/allemployees", {
    //     TaskName:taskName,
    //     assignedTo:assiengedTo,
    //     TaskDiscription:taskDiscriptaion,
    //     TaskDeadLine:deadline,
    //     taskStatus:status
    //   })
    // }
  
  
  
  
  
    return (
      <div
        className="h-full w-full flex justify-center items-center fixed top-0 left-0 z-30"
        onClick={() => {
          mod();
        }}
        style={{ backgroundColor: "rgba(0,0,0,0.7)" }}
      >
        <div
          className="bg-white w-[90%] xxxs:w-[85%] md:w-[70%] max-h-[90vh] overflow-y-auto px-4 py-8 custom-shadow rounded-2xl flex gap-1  items-center flex-col modelAnimation"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between w-[90%] items-center relative">
            <h1 className="lg:text-4xl md:text-3xl text-2xl font-[500] text-[#001063]">
             Add New Poll
            </h1>
            <RxCross2
              className="xxs:static sm:absolute text-2xl sm:top-1 sm:float-right cursor-pointer relative top-0 right-[-1rem]"
              onClick={() => {
                mod();
              }}
            />
          </div>
          <div className="w-[100%] flex flex-col md:flex-row border-none h-fit items-center md:items-start mt-4">
            <div className="w-[90%] md:w-[50%] flex flex-col justify-center items-center gap-1 xxxs:gap-6">
              <div className="w-full md:w-[80%]">
                <label
                  htmlFor="message"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Poll Name
                </label>
                <textarea
                  name="message"
                  value={taskName}
                  onChange={(e) => { setProjectname(e.target.value) }}
                  className=" text-[0.9rem] h-[3rem]  resize-none border border-gray-300 rounded-md px-4 py-3 block w-full focus:outline-none focus:ring-[#001063] focus:border-[#001063] "
                ></textarea>
              </div>
  
            </div>
            <div className="w-[90%] md:w-[50%] flex flex-col gap-6 mt-4 md:mt-0">
              <div className="w-full md:w-[80%]">
                <label
                  htmlFor="message"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Deadline
                </label>
                <input
                  type="time"
                  name="message"
                  value={date.toLocaleTimeString()}
                  onChange={(e) => { setDeadline(e.target.value) }}
                  rows="2"
                  className=" text-[0.9rem] h-[3rem] resize-none border border-gray-300 rounded-md px-4 py-3 block w-full focus:outline-none focus:ring-[#001063] focus:border-[#001063] "
                />
              </div>
              {/* <div class="w-full md:w-[80%]">
                  <label for="message" className="block text-gray-700 text-sm font-bold mb-2">Country</label>
                  <textarea name="message" rows='2' className=" text-[0.9rem]  resize-none border border-gray-300 rounded-md px-4 py-2 block w-full focus:outline-none focus:ring-[#001063] focus:border-[#001063] "></textarea>
                </div> */}
            </div>
          </div>
  
          <div className="w-[100%] flex flex-col md:flex-row border-none h-fit items-center md:items-start mt-4">
            <div className="w-[90%] md:w-[50%] flex flex-col gap-6 mt-4 md:mt-0  items-center">
              <div className="w-full md:w-[80%]">
  
                <label htmlFor="status" className="block text-gray-700 text-sm font-bold mb-2">Status</label>
                <select
                  name="status"
                  rows="2"
                  value={status}
                  id="EduGrade"
                  onChange={(e) => {
                    setStatus(e.target.value)
                  }}
                  className=" text-[0.9rem] h-[3rem] w-full  resize-none border border-gray-300 rounded-md px-4 py-2 block focus:outline-none focus:ring-[#001063] focus:border-[#001063] "
                >
                  <option value="done">Done</option>
                  <option value="pandind">Panding</option>
  
                </select>
              </div>
  
            </div>
            <div className="w-[90%] md:w-[50%] flex flex-col gap-6 mt-4 md:mt-0">
              <div className="w-full md:w-[80%]">
                <label
                  htmlFor="message"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Deadline
                </label>
                <input
                  type="date"
                  name="message"
                  value={deadline}
                  onChange={(e) => { setDeadline(e.target.value) }}
                  rows="2"
                  className=" text-[0.9rem] h-[3rem] resize-none border border-gray-300 rounded-md px-4 py-3 block w-full focus:outline-none focus:ring-[#001063] focus:border-[#001063] "
                />
              </div>
              {/* <div class="w-full md:w-[80%]">
                  <label for="message" className="block text-gray-700 text-sm font-bold mb-2">Country</label>
                  <textarea name="message" rows='2' className=" text-[0.9rem]  resize-none border border-gray-300 rounded-md px-4 py-2 block w-full focus:outline-none focus:ring-[#001063] focus:border-[#001063] "></textarea>
                </div> */}
            </div>
          </div>
  
          <div className="w-[100%] flex flex-col md:flex-row border-none h-fit items-center md:items-start mt-4 ">
            <div className="w-[90%] md:w-[90%] flex flex-col gap-6 mt-4 md:mt-0 items-center">
              <label htmlFor="" className=" block text-gray-700 text-sm font-bold mb-2">Mambers</label>
              <div className="w-[90%] border-[#001063] border-[0.5px] px-2 py-2 relative rounded-md flex gap-3 flex-wrap items-center">
                {Array.from(pills).map((p, i) => {
                  return (<span onClick={() => { removePill(p) }} className="px-3 flex py-2 bg-[#001063] items-center gap-2 relative text-white rounded-full">{p} <RxCross2 className="right-4" /></span>)
                })}
                <div>
                  <input type="text" className="outline-none" placeholder="Search for Employee ..." value={assiengedTo} onKeyDown={(e)=>{e.key==="Enter"&&updatepPills(e.target.value)}} onChange={(e) => { setAssiengedTo(e.target.value) }} />
                  <ul className="absolute top-9 text-white">
                    {suggestion.length !== 0 ? <ul className="bg-white w-fit text-black  border-[0.8px] rounded-2xl overflow-hidden">
                      {suggestion?.map((employee) => (
                        <li className="cursor-pointer p-2  hover:bg-slate-300" onClick={(e) => {
                          setAssiengedTo("");
                          updatepPills(employee);
  
                        }} key={employee._id}>{employee}</li>
                      ))}
                    </ul> : <></>}
                  </ul>
                </div>
              </div>
            </div>
  
          </div>
  
          <div className="w-[89%] mt-4 md:mt-4">
            <label
              htmlFor="message"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Edit Description
            </label>
            <textarea
              name="message"
              rows="4"
              value={taskDiscriptaion}
              onChange={(e) => { setProjectDiscriptaion(e.target.value) }}
              className=" resize-none border border-gray-300 rounded-md py-2 px-4 block w-full focus:outline-none focus:ring-[#001063] focus:border-[#001063] textarea"
            ></textarea>
          </div>
  
  
  
  
          <div className="flex gap-8 mt-8 px-16 w-full justify-center md:justify-end">
            <button
              onClick={() => {
                mod();
              }}
              className="hover:bg-[#001063] hover:text-white border-[1px] transition-all transition-1 border-[#001063] px-2 py-1 md:px-3 md:py-3 flex justify-center items-center text-[#001063] gap-[6px] rounded-xl  text-[12px]"
            >
              <MdOutlineCancel size={20} /> Discard
            </button>
            <button
  
              className="bg-[#001063]  px-2 py-1 md:px-3 md:py-3 flex justify-center items-center text-white gap-[6px] rounded-xl text-[12px] transition-colors "
            >
              <BiSave size={20} /> Post
            </button>
          </div>
        </div>
      </div>
    )
  }