import React from 'react'
import { useQuery } from 'react-query'

function findErrorMssage(status) {
    switch(status){
        case 403:
            return "You do not have permission to view the photos"
        default:
            return "There was an error retrieving the photos. please try again"            
    }
}

function checkStatus(response) {
    if(response.ok) {
        return response
    } else {
        throw new Error(findErrorMssage(response.status))
    }
}

function parseJson(response) {
    return response.json()
}

function getImage() {
    const url = "https://api.api-ninjas.com/v1/quotes?category=happiness"
    return (
        fetch(url,{
            method: "GET",
            headers: {
                "X-Api-Key": "UbTkLvu626TGMhDrQ7Y1cg==cPBkyJFzrj0oRhwV"
            }
        })
            .then(checkStatus)
            .then(parseJson)
            .catch((error) => {
                throw new Error(error)
            })
    )
}

function usePhotos() {
    const queryInfo = useQuery({
        queryFn: getImage,
    })

    return queryInfo
}

function Query() {
  const { isLoading , data , error } = usePhotos()
  console.log(data)
  return (
    <div>
        {
            error ?  <p style={{ color: 'red'}}>{error}</p> : (
                isLoading ? (<p>loading...</p>): (
                    <p>{data[0].quote}</p>
                )
            )
        }
    </div>
  )
}

export default Query