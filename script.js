function clearScreen() {
        document.getElementById("calculator-screen").value = "";
        }

        function deleteLast() {
            let screen = document.getElementById("calculator-screen");
                screen.value = screen.value.slice(0, -1);
                }

                function appendValue(value) {
                    let screen = document.getElementById("calculator-screen");
                        screen.value += value;
                        }

                        function calculateResult() {
                            let screen = document.getElementById("calculator-screen");
                                try {
                                        screen.value = eval(screen.value);
                                            } catch (error) {
                                                    alert("Invalid expression");
                                                            screen.value = "";
                                                                }
                                                                }
}