
  
let query = "SELECT state FROM customer"

   // let query = "select state from customer where state = "+ '"' + inptState + '"' + "where 
    
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=ajl98875&pass=Stlouiesunsv2@&database=ajl98875&query=" + query)
    
    
    if (req1.status == 200) { //transit worked.
        results=JSON.parse(req1.responseText)
            
          console.log("the parsed JSON is " + results)
        
      let message = ""
      for (i=0; i <= results.length-1; i++)
        message = message + results[i] + "\n"
        console.log(message)
      textAreaStateOptions.value = message
        
    }  
