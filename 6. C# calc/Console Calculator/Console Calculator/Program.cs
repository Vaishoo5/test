// See https://aka.ms/new-console-template for more information
// Console.WriteLine("Hello, World!");

using System;

namespace MyCalculator 
{
    internal class Program
    {
        static void Main(string[] args)
        {
            do
            {
                double num1 = 0;
                double num2 = 0;
                double result = 0;

                Console.WriteLine("CALCULATOR!");
                Console.Write("Enter First Number: ");
                num1 = Convert.ToDouble(Console.ReadLine());
                Console.Write("Enter Second Number: ");
                num2 = Convert.ToDouble(Console.ReadLine());

                Console.WriteLine("Select an Operation: ");
                Console.WriteLine("\t+ : Add");
                Console.WriteLine("\t- : Subtract");
                Console.WriteLine("\t* : Multiply");
                Console.WriteLine("\t/ : Divide");
                Console.Write("Select an Operation: ");

                switch (Console.ReadLine())
                {
                    case "+":
                        result = num1 + num2;
                        Console.WriteLine($"Your result is: {num1} + {num2} = " + result);
                        break;
                    case "-":
                        result = num1 - num2;
                        Console.WriteLine($"Your result is: {num1} - {num2} = " + result);
                        break;
                    case "*":
                        result = num1 * num2;
                        Console.WriteLine($"Your result is: {num1} * {num2} = " + result);
                        break;
                    case "/":
                        result = num1 / num2;
                        Console.WriteLine($"Your result is: {num1} / {num2} = " + result);
                        break;
                    default:
                        Console.WriteLine("Invalid Operation");
                        break;

                }
                Console.WriteLine("-------------------------------");
                Console.WriteLine(" ");
                Console.WriteLine(" ");
                Console.WriteLine("Would you like to continue? (Y=yes, N=no): ");
            } while (Console.ReadLine().ToUpper() == "Y");

            Console.WriteLine("Thankyou");
            Console.ReadKey();
        }
    }
}
