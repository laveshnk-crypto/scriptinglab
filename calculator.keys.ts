<input type="text" class="calculator-screen" [value]="currentNumber"
disabled> <div class="calculator-keys">
 <button type="button" (click) = "getfacto()" class="operator" >!</button>
 <button type="button" (click) = "getPrime()" class="operator" >Prime</button 
>
 <button type="button" (click) = "getOperation('+')" class="operator" value=" 
+">+</button>
 <button type="button" (click) = "getOperation('-
')" class="operator" value="-">-</button>
 <button type="button" (click) = "getOperation('*')" class="operator" value=" 
*">x</button>
 <button type="button" (click) = "getOperation('/')" class="operator" value="
/">/</button>
 <button type="button" (click) = "getNumber('7')" value="7">7</button>
 <button type="button" (click) = "getNumber('8')" value="8">8</button> 
<button type="button" (click) = "getNumber('9')" value="9">9</button> 
 <button type="button" (click) = "getNumber('4')" value="4">4</button>
 <button type="button" (click) = "getNumber('5')" value="5">5</button> 
<button type="button" (click) = "getNumber('6')" value="6">6</button> 
 <button type="button" (click) = "getNumber('1')" value="1">1</button>
 <button type="button" (click) = "getNumber('2')" value="2">2</button> 
<button type="button" (click) = "getNumber('3')" value="3">3</button>
 <button type="button" (click) = "getNumber('0')" value="0">0</button> 
<button type="button" (click) = "getDecimal()" class="decimal" value=".">.</ 
button>
 <button type="button" (click) = "clear()" class="all-clear"
value="allclear">AC</button>
 <button type="button" (click) = "getOperation('=')" class="equalsign"
value="=">=</button>
</div>
