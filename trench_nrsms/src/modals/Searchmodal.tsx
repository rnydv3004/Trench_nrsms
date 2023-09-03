import React from 'react';

export default function SearchModal(props: any) {
  return (
    <div
      className={`${
        props.status ? 'modal-overlay' : 'hidden'
      }  w-screen h-screen bg-white flex justify-center items-center`}
    >
      <div className="bg-white p-4 rounded-lg shadow-lg">
        {/* Add your search form or content here */}
        <h2 className="text-xl font-semibold mb-4">Search</h2>
        <form>
          <input
            type="text"
            placeholder="Search..."
            className="border rounded px-2 py-1"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded ml-2"
          >
            Search
          </button>
        </form>
        {/* End of search form or content */}
        <button
          onClick={() => props.closeSearch()}
          className="absolute top-0 right-0 p-2 m-2"
        >
          Close
        </button>
      </div>
    </div>
  );
}
