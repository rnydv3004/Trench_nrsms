import mysql from "mysql2/promise"
import { mySqlConnection } from "@/config/mysql/mySqlConfig";

import { NextRequest, NextResponse } from "next/server";

export async function GET(){
    return NextResponse.json({
        id: "Hi This is a GET request",
    })
}

export async function POST(request: Request){
    
    const {email,uid} = await request.json()
    const sqlConnection = mySqlConnection
    sqlConnection.connect()

    sqlConnection.query(
        'SELECT COUNT(*) AS rowCount FROM school',
        function(err:any, results:any, fields:any) {
          if (err) {
            console.error('Error:', err);
            return;
          }
      
          // The result will contain the row count
          const rowCount = results[0].rowCount;
          console.log('Row Count:', rowCount);
        }
      );
      

    console.log(email)
    return NextResponse.json({error:"not created"})
}