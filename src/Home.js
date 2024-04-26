import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">Practice Stuff</h1>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <li>
                    <Link to="/useCopyhook" className="block bg-white rounded-lg shadow-md p-4 hover:bg-blue-100 transition duration-300">
                        useCopyhook
                    </Link>
                </li>

            </ul>
        </div>
    );
}

export default Home;
