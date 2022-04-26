import React from 'react';
import Card  from './Card';

const BlogsTable = () => {
    const [tag, setTag] = React.useState('self');
    const [blogs, setBlogs] = React.useState('');
    const [isLoading, setIsLoading] = React.useState(true);
    const handleChange = (event) => {
        setTag(event.target.value);
        console.log(event.target.value);
        setIsLoading(true);
        fetch(`http://localhost:8000/posts/${event.target.value}`).then(res => res.json())
                .then(data => {
                    setBlogs(data);
                    setIsLoading(false);
                });
    }
    return (
        <div>
        <div>
            <div className="flex justify-center p-5">
                <div className="form-check form-check-inline">
                    <input className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="self" onChange={handleChange}/>
                    <label className="form-check-label inline-block text-gray-800" htmlFor="inlineRadio10">Self</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="relationships" onChange={handleChange}/>
                    <label className="form-check-label inline-block text-gray-800" htmlFor="inlineRadio10">Relationships</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="data-science" onChange={handleChange}/>
                    <label className="form-check-label inline-block text-gray-800" htmlFor="inlineRadio10">Data Science</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="programming" onChange={handleChange}/>
                    <label className="form-check-label inline-block text-gray-800" htmlFor="inlineRadio10">Programming</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="productivity" onChange={handleChange}/>
                    <label className="form-check-label inline-block text-gray-800" htmlFor="inlineRadio10">Productivity</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="javascript" onChange={handleChange}/>
                    <label className="form-check-label inline-block text-gray-800" htmlFor="inlineRadio10">Javascript</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="machine-learning" onChange={handleChange}/>
                    <label className="form-check-label inline-block text-gray-800" htmlFor="inlineRadio10">Machine Learning</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="politics" onChange={handleChange}/>
                    <label className="form-check-label inline-block text-gray-800" htmlFor="inlineRadio10">Politics</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="health" onChange={handleChange}/>
                    <label className="form-check-label inline-block text-gray-800" htmlFor="inlineRadio10">Health</label>
                </div>
            </div>
            {/* fetch blogs from backend through fetch request htmlFor selected tag and display card */}
            {isLoading ? <p>Please select a tag from above:</p> : blogs.map(blog => <Card key={blog.id} {...blog}></Card>)}
        </div>
        </div>

    )
}

export default BlogsTable;
