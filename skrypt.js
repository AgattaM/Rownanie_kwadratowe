function oblicz(){
    let a = Number(document.getElementById("a").value);
    let b = Number(document.getElementById("b").value);
    let c = Number(document.getElementById("c").value);
    document.getElementById("wynik").innerHTML = "";

    if(a!=0){
        let delta = b*b-4*a*c;
        document.getElementById("wynik").innerHTML += "y = ";
        if(a==1){
            document.getElementById("wynik").innerHTML += "x<sup>2</sup>";
        }
        else if(a==-1){
            document.getElementById("wynik").innerHTML += "-x<sup>2</sup>";
        }
        else{
            document.getElementById("wynik").innerHTML += a+"x<sup>2</sup>";
        }
        if(b==1){
            document.getElementById("wynik").innerHTML += "+x";
        }
        else if(b==-1){
            document.getElementById("wynik").innerHTML += "-x";
        }
        else if(b>0){
            document.getElementById("wynik").innerHTML += "+"+b+"x";
        }
        else if(b<0){
            document.getElementById("wynik").innerHTML += b+"x";
        }
        if(c>0){
            document.getElementById("wynik").innerHTML += "+"+c;
        }
        else if(c<0){
            document.getElementById("wynik").innerHTML += c;
        }
        document.getElementById("wynik").innerHTML += "<br><br>";

        if(delta==0){
            let x=-b/2*a;
            document.getElementById("wynik").innerHTML += "X = "+x;
        }
        else if(delta>0){
            let x1= (-b-Math.sqrt(delta))/2*a;
            let x2 =(-b+Math.sqrt(delta))/2*a;
            document.getElementById("wynik").innerHTML += "x<sub>1</sub> = "+x1+"<br>x<sub>2</sub> = "+x2;
        }
        else{
            document.getElementById("wynik").innerHTML += "Równanie nie ma rozwiązania.<br><br>Δ<0";

        }
        
    }
    
    else{
        if(b!=0){
            document.getElementById("wynik").innerHTML += "<b>To jest równanie liniowe, nie kwadratowe</b> (nie podałeś a)<br>Ale je też potrafię obliczyć :)<br><br>";
            document.getElementById("wynik").innerHTML +="y = ";
            if(b==1){
                document.getElementById("wynik").innerHTML += "x";
            }
            else if(b==-1){
                document.getElementById("wynik").innerHTML += "-x";
            }
            else{
                document.getElementById("wynik").innerHTML += +b+"x";
            }
            if(c>0){
                document.getElementById("wynik").innerHTML += "+"+c;
            }
            else if(c<0){
                document.getElementById("wynik").innerHTML += c;
            }
            document.getElementById("wynik").innerHTML += "<br>"

            x = c/b;
            document.getElementById("wynik").innerHTML += "x = "+x;
        }
        else{
            document.getElementById("wynik").innerHTML = "Podałeś tylko c.";
        }
        
    }

    
}