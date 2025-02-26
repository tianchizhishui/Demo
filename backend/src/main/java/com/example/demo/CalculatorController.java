package com.example.demo;


import org.springframework.web.bind.annotation.*; // For @RestController, @RequestMapping, etc.
import org.springframework.http.ResponseEntity; // For HTTP responses
import org.springframework.http.HttpStatus; // To return proper HTTP status codes

@RestController
@CrossOrigin(
        origins = "http://localhost:3000"
)
public class CalculatorController {
    @PostMapping("/calculate")
    public ResponseEntity<Double> calculate(@RequestBody CalculationRequest request) {
        try {
            double result = performCalculation(request);
            return ResponseEntity.ok(result);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        }
    }

    private double performCalculation(CalculationRequest request) {
        double num1 = request.getNum1();
        double num2 = request.getNum2();
        String operator = request.getOperator();

        switch (operator) {
            case "+": return num1 + num2;
            case "-": return num1 - num2;
            case "*": return num1 * num2;
            case "/": return (num2 != 0) ? num1 / num2 : 0; // Avoid division by zero
            default: throw new IllegalArgumentException("Invalid operator");
        }
    }
}
