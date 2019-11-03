customerAdding.onshow=function(){
  let query="SELECT name FROM customer"

  //run a Ajax call, which run query on database server
  req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=ajl98875&pass=Stlouiesunsv2@&database=ajl98875&query=" + query)

  if (req1.status==200){
    //transaction works
    results=JSON.parse(req1.responseText)
    
    //console.log("the parsed JSON is " + results)
    
    let message = ""
    for (i=0; i <= results.length-1; i++)
        message = message + results[i][0] + "\n"
    txtNameA.value = message
  
  }else{
    NSB.MsgBox("Error code: " + req1.status)
  }
}

btnNameA.onclick=function(){
    
    let query = "INSERT INTO customer (name,street,city,state,zipcode) VALUES ('Jessca Antiques', '1113 F St', 'Omaha', 'NE', 68178)"
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=ajl98875&pass=Stlouiesunsv2@&database=ajl98875&query=" + query)

    if (req1.status == 200) { //transit worked.
        if (req1.responseText == 500) {   // means the insert succeeded
            let result = JSON.parse(req1.responseText)
            
            let message = ""
            for (i=0; i <= results.length-1; i++){
                let queryNew="SELECT name FROM customer"
                req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=ajl98875&pass=Stlouiesunsv2@&database=ajl98875&query=" + queryNew)

                if (req1.status==200){
                  //transaction works
                  results=JSON.parse(req1.responseText)
                  
                  
                  let message = ""
                  for (i=0; i <= results.length-1; i++)
                      message = message + results[i][0] + "\n"
                  txtNameA.value = message
                 }
            }
            NSB.MsgBox("You have successfully added the name!")
        } else{
            NSB.MsgBox("There was a problem with adding the name to the database.")
        }
    } else {
        // transit error
        NSB.MsgBox("Error: " + req1.status)
    }  
}

BackA.onclick=function(){
  ChangeForm(Homepage)
}
