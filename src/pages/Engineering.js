/* eslint-disable react/jsx-key */
import React, { useState, useEffect } from "react";
import { firebase } from "../../Firebase/config";
import Head from 'next/head'

const db = firebase.firestore();
const storage = firebase.storage();

const SelectOption = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedSemester, setSelectedSemester] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");
  const [subjects, setSubjects] = useState([]);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    setSelectedYear("");
    setSelectedSemester("");
    setSelectedCategory("");
    setSelectedSubject("");
  };

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
    setSelectedSemester("");
    setSelectedCategory("");
    setSelectedSubject("");
  };

  const handleSemesterChange = (event) => {
    setSelectedSemester(event.target.value);
    setSelectedCategory("");
    setSelectedSubject("");
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    setSelectedSubject("");
  };

  const handleSubjectChange = (event) => {
    setSelectedSubject(event.target.value);
  };

  const selectedText = `${selectedOption} ${selectedYear} ${selectedSemester} ${selectedCategory} ${selectedSubject}`;
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from Firebase Firestore
    db.collection("Engineering")
      .where("branchName", "==", selectedOption)
      .where("yearName", "==", selectedYear)
      .where("semesterName", "==", selectedSemester)
      .where("notesName", "==", selectedCategory)
      .where("subjectName", "==", selectedSubject)
      .get()
      .then((querySnapshot) => {
        const documents = querySnapshot.docs.map((doc) => doc.data());
        setData(documents);
      })
      .catch((error) => console.log(error));
  }, [selectedOption, selectedYear, selectedSemester, selectedCategory, selectedSubject]);

  useEffect(() => {
    if (selectedCategory !== "") {
      // Fetch subjects based on selected category
      db.collection("Engineering")
      .where("branchName", "==", selectedOption)
      .where("yearName", "==", selectedYear)
      .where("semesterName", "==", selectedSemester)
      .where("notesName", "==", selectedCategory)
        .get()
        .then((querySnapshot) => {
          const documents = querySnapshot.docs.map((doc) => doc.data());
          const uniqueSubjects = [...new Set(documents.map((doc) => doc.subjectName))];
          setSubjects(uniqueSubjects);
        })
        .catch((error) => console.log(error));
    }
  }, [selectedCategory]);

  const downloadPdf = (url) => {
    window.open(url);
  };
  return (
    <><div className="flex flex-col w-full max-w-xs mx-auto mt-10">
        <Head>
        <title>Engineering-PadhoG</title>
        <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0" />
        <link rel="icon" href="/icon.png" />
      </Head>
          <select
              value={selectedOption}
              onChange={handleOptionChange}
              className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
          >
              <option value="">Select Your Branch</option>
              <option value="CSE">Computer Science Engineering</option>
              <option value="ME">Mechanical Engineering</option>
              <option value="EE">Electrical Engineering</option>
              <option value="CE">Civil Engineering</option>
              <option value="ECE">Electronics Communication Engineering</option>
          </select>

          {selectedOption  !== "" && (
              <select
                  value={selectedYear}
                  onChange={handleYearChange}
                  className="mt-4 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              >
                  <option value="">Select  Year</option>
                  <option value="1st Year">1st Year</option>
                  <option value="2nd Year">2nd Year</option>
                  <option value="3rd Year">3rd Year</option>
                  <option value="4th Year">4th Year</option>

              </select>
          )}

          

          {selectedYear !== "" && (
              <select
                  value={selectedSemester}
                  onChange={handleSemesterChange}
                  className="mt-4 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              >
                  <option value="">Select Semester</option>
                  {selectedYear === "1st Year" && (
                      <>
                          <option value="1st Semester">1st Semester</option>
                          <option value="2nd Semester">2nd Semester</option>
                      </>
                  )}
                  {selectedYear === "2nd Year" && (
                      <>
                          <option value="3rd Semester">3rd Semester</option>
                          <option value="4th Semester">4th Semester</option>
                      </>
                  )}
                  {selectedYear === "3rd Year" && (
                      <>
                          <option value="5th Semester">5th Semester</option>
                          <option value="6th Semester">6th Semester</option>
                      </>
                  )}
                  {selectedYear === "4th Year" && (
                      <>
                          <option value="7th Semester">7th Semester</option>
                          <option value="8th Semester">8th Semester</option>
                      </>
                  )}
              </select>
          )}

          {selectedSemester !== "" && (
              <select
                  value={selectedCategory}
                  onChange={handleCategoryChange}
                  className="mt-4 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              >
                  <option value="">Select Category</option>
                  <option value="Gold">Gold</option>
                  <option value="Notes">Notes</option>
              </select>
          )}

{selectedCategory !== "" && (
  <select
    value={selectedSubject}
    onChange={handleSubjectChange}
    className="mt-4 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
  >
    <option value="">Select Subject</option>
    {subjects.map((subject) => (
      <option key={subject} value={subject}>{subject}</option>
    ))}
  </select>
)}



      </div><section className="container px-4 mx-auto">
              <h2 className="text-lg font-medium text-gray-800 dark:text-white">Your Notes</h2>

              <p className="mt-1 text-sm text-gray-500 dark:text-gray-300">Engineering Data for {selectedText}</p>

              <div className="flex flex-col mt-6">
                  <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                      <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                          <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">

                              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                  <thead className="bg-gray-50 dark:bg-gray-800">
                                      <tr>
                                          <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                              <button className="flex items-center gap-x-3 focus:outline-none">
                                                  <span>S.NO</span>

                                                  <svg className="h-3" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                      <path d="M2.13347 0.0999756H2.98516L5.01902 4.79058H3.86226L3.45549 3.79907H1.63772L1.24366 4.79058H0.0996094L2.13347 0.0999756ZM2.54025 1.46012L1.96822 2.92196H3.11227L2.54025 1.46012Z" fill="currentColor" stroke="currentColor" stroke-width="0.1" />
                                                      <path d="M0.722656 9.60832L3.09974 6.78633H0.811638V5.87109H4.35819V6.78633L2.01925 9.60832H4.43446V10.5617H0.722656V9.60832Z" fill="currentColor" stroke="currentColor" stroke-width="0.1" />
                                                      <path d="M8.45558 7.25664V7.40664H8.60558H9.66065C9.72481 7.40664 9.74667 7.42274 9.75141 7.42691C9.75148 7.42808 9.75146 7.42993 9.75116 7.43262C9.75001 7.44265 9.74458 7.46304 9.72525 7.49314C9.72522 7.4932 9.72518 7.49326 9.72514 7.49332L7.86959 10.3529L7.86924 10.3534C7.83227 10.4109 7.79863 10.418 7.78568 10.418C7.77272 10.418 7.73908 10.4109 7.70211 10.3534L7.70177 10.3529L5.84621 7.49332C5.84617 7.49325 5.84612 7.49318 5.84608 7.49311C5.82677 7.46302 5.82135 7.44264 5.8202 7.43262C5.81989 7.42993 5.81987 7.42808 5.81994 7.42691C5.82469 7.42274 5.84655 7.40664 5.91071 7.40664H6.96578H7.11578V7.25664V0.633865C7.11578 0.42434 7.29014 0.249976 7.49967 0.249976H8.07169C8.28121 0.249976 8.45558 0.42434 8.45558 0.633865V7.25664Z" fill="currentColor" stroke="currentColor" stroke-width="0.3" />
                                                  </svg>
                                              </button>
                                          </th>

                                          <th scope="col" className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                              Unit Name
                                          </th>

                                          <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                              View Pdf
                                          </th>


                                      </tr>
                                  </thead>
                                  <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                                  {data.length === 0 && (
      <h2 className="text-xl font-medium text-gray-700">No Notes Found</h2>
    )}
                                      {data.map((item, index) => (
                                          <tr key={item.id}>
                                              <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                                                  <div>
                                                      <h2 className="font-medium text-gray-800 dark:text-white ">Units {index + 1}</h2>
                                                  </div>
                                              </td>
                                              <td className="px-12 py-4 text-sm font-medium whitespace-nowrap">
                                                  <div className="inline px-3 py-1 text-sm font-normal rounded-full text-emerald-500 gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                                                      {item.chapterName}
                                                  </div>
                                              </td>
                                              <td className="px-4 py-4 text-sm whitespace-nowrap">
                                                  <button onClick={() => downloadPdf(item.PdfUrl)}>View PDF</button>
                                              </td>





                                          </tr>))}


                                  </tbody>
                              </table>

                          </div>
                      </div>
                  </div>
              </div>


          </section></>
  );
};

export default SelectOption;