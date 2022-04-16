function oblicz(){
    let a = Number(document.getElementById("a").value);
    let b = Number(document.getElementById("b").value);
    let c = Number(document.getElementById("c").value);
    document.getElementById("wynik").innerHTML = "";
    document.getElementById("kroki").innerHTML = "";

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
            document.getElementById("wynik").innerHTML += "x = "+x;
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

            x = c/b*(-1);
            document.getElementById("wynik").innerHTML += "x = "+x;
        }
        else if(c!=0){
            document.getElementById("wynik").innerHTML = "Podałeś tylko c.";
        }
        
    }

    
}

function kroki(){
    let a = Number(document.getElementById("a").value);
    let b = Number(document.getElementById("b").value);
    let c = Number(document.getElementById("c").value);
    document.getElementById("kroki").innerHTML = "";
    //document.getElementById("kroki").innerHTML = "";
    oblicz();
    document.getElementById("kroki").innerHTML = "<h3>Krok po kroku</h3>";
    if(a!=0){
        //oblicznie delty
        let delta = b*b-4*a*c;
        document.getElementById("kroki").innerHTML += "<p class='opisy'>1. Na początek obliczamy Δ (deltę / wyróżnik równania kwadratowego):</p>";
        document.getElementById("kroki").innerHTML += "<p class='wzory'>Δ = b<sup>2</sup>-4*a*c</p>";
        document.getElementById("kroki").innerHTML += "Δ = ";
        //prawidlowe wyswietlanie minusow (-)
        if(b>=0){
            document.getElementById("kroki").innerHTML += b;
        }
        else{
            document.getElementById("kroki").innerHTML += "("+b+")";
        }
        document.getElementById("kroki").innerHTML += "<sup>2</sup>-4*";//*a*c</p>";
        if(a>=0){
            document.getElementById("kroki").innerHTML += a;
        }
        else{
            document.getElementById("kroki").innerHTML += "("+a+")";
        }
        document.getElementById("kroki").innerHTML += "*";
        if(c>=0){
            document.getElementById("kroki").innerHTML += c;
        }
        else{
            document.getElementById("kroki").innerHTML += "("+c+")";
        }
        document.getElementById("kroki").innerHTML += "<br><br>";
        //wyswietl deltę
        document.getElementById("kroki").innerHTML += "Δ = "+delta+"<br><br>";

        //przrównanie delty do zera
        document.getElementById("kroki").innerHTML += "<p class='opisy'>2. Teraz przyrównujemy deltę do zera i sprawdzamy czy: <ul><li>Δ > 0</li><li>Δ = 0</li><li>Δ < 0</li></ul></p>";
        document.getElementById("kroki").innerHTML += "W naszym przypadku: ";
        
        //zapis rownania z podstawionym a,b i c
        /*document.getElementById("kroki").innerHTML += "y = ";
        if(a==1){
            document.getElementById("kroki").innerHTML += "x<sup>2</sup>";
        }
        else if(a==-1){
            document.getElementById("kroki").innerHTML += "-x<sup>2</sup>";
        }
        else{
            document.getElementById("kroki").innerHTML += a+"x<sup>2</sup>";
        }
        if(b==1){
            document.getElementById("kroki").innerHTML += "+x";
        }
        else if(b==-1){
            document.getElementById("kroki").innerHTML += "-x";
        }
        else if(b>0){
            document.getElementById("kroki").innerHTML += "+"+b+"x";
        }
        else if(b<0){
            document.getElementById("kroki").innerHTML += b+"x";
        }
        if(c>0){
            document.getElementById("kroki").innerHTML += "+"+c;
        }
        else if(c<0){
            document.getElementById("kroki").innerHTML += c;
        }
        document.getElementById("kroki").innerHTML += "<br><br>";*/

        if(delta==0){
            document.getElementById("kroki").innerHTML += "Δ = 0";
            document.getElementById("kroki").innerHTML += "<p class='opisy'>To oznacza, że równanie ma jedno rozwiązanie.</p><br>"
            let x=-b/(2*a);

            document.getElementById("kroki").innerHTML += "<p class='opisy'>3. Teraz podstawiamy dane do wzoru:</p>";
            document.getElementById("kroki").innerHTML += "<p class='wzory'>x = (-b)/(2*a)</p>";
            document.getElementById("kroki").innerHTML += "<p class='opisy'>i obliczamy:<p>";

            //podstawienie do wzoru
            //document.getElementById("kroki").innerHTML += "<br>";

            //przejscie pierwsze
            document.getElementById("kroki").innerHTML += "<b>x</b> = ";
            //minus przy b
            if(b<0){
                document.getElementById("kroki").innerHTML += b +"/(2*";
            }
            else{
                document.getElementById("kroki").innerHTML += "(-"+ b +")/(2*";
            }
            //minus przy a
            if(a<0){
                document.getElementById("kroki").innerHTML += "("+a+"))";
            }
            else{
                document.getElementById("kroki").innerHTML += a+")";
            }
            //przejscie drugie
            let dod=-b; //dod jak dodawanie
            document.getElementById("kroki").innerHTML += " = ";
            if(dod<0){
                document.getElementById("kroki").innerHTML += "("+(dod)+")/";
            }
            else{
                document.getElementById("kroki").innerHTML += dod +"/";
            }
            let mn = 2*a; //mn jak mnożenie
            if(mn<0){
                document.getElementById("kroki").innerHTML += "("+mn+")";
            }
            else{
                document.getElementById("kroki").innerHTML += mn;
            }
            //wynik
            document.getElementById("kroki").innerHTML += " = ";
            document.getElementById("kroki").innerHTML += "<b>"+ x +"</b>";
            
            //odczytujemy wynik
            document.getElementById("kroki").innerHTML += "<p class='opisy'>4. Na koniec odczytujemy wynik :)</p>";
            document.getElementById("kroki").innerHTML += "<b>x = "+x+"</b>";
        }
        else if(delta>0){
            //wypisanie wzorów
            document.getElementById("kroki").innerHTML += "Δ > 0";
            document.getElementById("kroki").innerHTML += "<p class='opisy'>To oznacza, że równanie ma dwa rozwiązania.</p><br>"
            document.getElementById("kroki").innerHTML += "<p class='opisy'>3. Teraz podstawiamy dane do dwóch wzorów:</p>";
            document.getElementById("kroki").innerHTML += "<p class='wzory'>x<sub>1</sub> = (-b-&radic;<span style='text-decoration: overline'>Δ</span>)/(2*a)</p>";
            document.getElementById("kroki").innerHTML += "<p class='opisy'>i<p>";
            document.getElementById("kroki").innerHTML += "<p class='wzory'>x<sub>2</sub> = (-b+&radic;<span style='text-decoration: overline'>Δ</span>)/(2*a)</p>";
            document.getElementById("kroki").innerHTML += "<p class='opisy'>i obliczamy:<p>";
            
            //obliczenia komputera
            let x1= (-b-Math.sqrt(delta))/(2*a);
            let x2 =(-b+Math.sqrt(delta))/(2*a);

            //podstawienie do wzoru
            //najpierw x1
            //document.getElementById("kroki").innerHTML += "<br>";

            //przejscie pierwsze
            document.getElementById("kroki").innerHTML += "<b>x<sub>1</sub></b> = (";
            //minus przy b
            if(b<0){
                document.getElementById("kroki").innerHTML += b +"-&radic;<span style='text-decoration: overline'>"+delta+"</span>)/(2*";
            }
            else{
                document.getElementById("kroki").innerHTML += "-"+ b +"-&radic;<span style='text-decoration: overline'>"+delta+"</span>)/(2*";
            }
            //minus przy a
            if(a<0){
                document.getElementById("kroki").innerHTML += "("+a+"))";
            }
            else{
                document.getElementById("kroki").innerHTML += a+")";
            }
            //przejscie drugie
            document.getElementById("kroki").innerHTML += " = (";
            //minus przy b
            if(b<0){
                document.getElementById("kroki").innerHTML += b+"-"+Math.sqrt(delta)+")/(2*";
            }
            else{
                document.getElementById("kroki").innerHTML += "-"+ b+"-"+Math.sqrt(delta)+")/(2*";
            }
            //minus przy a
            if(a<0){
                document.getElementById("kroki").innerHTML += "("+a+"))";
            }
            else{
                document.getElementById("kroki").innerHTML += a+")";
            }
            //przejscie trzecie
            let dod=-b-Math.sqrt(delta); //dod jak dodawanie
            document.getElementById("kroki").innerHTML += " = ";
            if(dod<0){
                document.getElementById("kroki").innerHTML += "("+dod+")/";
            }
            else{
                document.getElementById("kroki").innerHTML += dod +"/";
            }
            let mn = 2*a; //mn jak mnożenie
            if(mn<0){
                document.getElementById("kroki").innerHTML += "("+mn+")";
            }
            else{
                document.getElementById("kroki").innerHTML += mn;
            }
            //wynik
            document.getElementById("kroki").innerHTML += " = ";
            document.getElementById("kroki").innerHTML += "<b>"+ x1 +"</b>";

            //teraz x2
            document.getElementById("kroki").innerHTML += "<br>";
            //przejscie pierwsze
            document.getElementById("kroki").innerHTML += "<b>x<sub>2</sub></b> = (";
            //minus przy b
            if(b<0){
                document.getElementById("kroki").innerHTML += b +"+&radic;<span style='text-decoration: overline'>"+delta+"</span>)/(2*";
            }
            else{
                document.getElementById("kroki").innerHTML += "-"+ b +"+&radic;<span style='text-decoration: overline'>"+delta+"</span>)/(2*";
            }
            //minus przy a
            if(a<0){
                document.getElementById("kroki").innerHTML += "("+a+"))";
            }
            else{
                document.getElementById("kroki").innerHTML += a+")";
            }
            //przejscie drugie
            document.getElementById("kroki").innerHTML += " = (";
            //minus przy b
            if(b<0){
                document.getElementById("kroki").innerHTML += b+"+"+Math.sqrt(delta)+")/(2*";
            }
            else{
                document.getElementById("kroki").innerHTML += "-"+ b+"+"+Math.sqrt(delta)+")/(2*";
            }
            //minus przy a
            if(a<0){
                document.getElementById("kroki").innerHTML += "("+a+"))";
            }
            else{
                document.getElementById("kroki").innerHTML += a+")";
            }
            //przejscie trzecie
            dod=-b+Math.sqrt(delta); //dod jak dodawanie
            document.getElementById("kroki").innerHTML += " = ";
            if(dod<0){
                document.getElementById("kroki").innerHTML += "("+dod+")/";
            }
            else{
                document.getElementById("kroki").innerHTML += dod +"/";
            }
            mn = 2*a; //mn jak mnożenie
            if(mn<0){
                document.getElementById("kroki").innerHTML += "("+mn+")";
            }
            else{
                document.getElementById("kroki").innerHTML += mn;
            }
            //wynik
            document.getElementById("kroki").innerHTML += " = ";
            document.getElementById("kroki").innerHTML += "<b>"+ x2 +"</b>";

            //odczytujemy wynik
            document.getElementById("kroki").innerHTML += "<p class='opisy'>4. Na koniec odczytujemy wynik :)</p>";
            document.getElementById("kroki").innerHTML += "<b>x<sub>1</sub> = "+x1+"<br>x<sub>2</sub> = "+x2+"</b>";

        }
        else{
            document.getElementById("kroki").innerHTML += "Δ < 0, więc:<br><br>";
            document.getElementById("kroki").innerHTML += "RÓWNANIE NIE MA ROZWIĄZANIA";
        }
        
    }
    
    else{
        if(b!=0){
            document.getElementById("kroki").innerHTML += "<b>To jest równanie liniowe, nie kwadratowe</b> (nie podałeś a)<br>Ale je też potrafię obliczyć :)<br><br>";
            document.getElementById("kroki").innerHTML +="y = ";
            if(b==1){
                document.getElementById("kroki").innerHTML += "x";
            }
            else if(b==-1){
                document.getElementById("kroki").innerHTML += "-x";
            }
            else{
                document.getElementById("kroki").innerHTML += +b+"x";
            }
            if(c>0){
                document.getElementById("kroki").innerHTML += "+"+c;
            }
            else if(c<0){
                document.getElementById("kroki").innerHTML += c;
            }
            document.getElementById("kroki").innerHTML += "<br>"

            x = c/b*(-1);
            document.getElementById("kroki").innerHTML += "x = "+x;
        }
        else if(c!=0){
            document.getElementById("kroki").innerHTML = "Podałeś tylko c.";
        }
        
    }
    document.getElementById("kroki").innerHTML +="<br>";

}