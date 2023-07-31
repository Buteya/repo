// See https://aka.ms/new-console-template for more information
Console.WriteLine("Hello, Steve!");
Random dice = new Random();
int roll = dice.Next(1, 7);
Console.WriteLine(roll);

Random dice1 = new Random();
int roll1 = dice1.Next();
int roll2 = dice1.Next(101);
int roll3 = dice1.Next(50, 101);

Console.WriteLine($"First roll: {roll1}");
Console.WriteLine($"Second roll: {roll2}");
Console.WriteLine($"Third roll: {roll3}");

int firstValue = 500;
int secondValue = 600;
int largerValue;
largerValue = Math.Max(firstValue, secondValue);
Console.WriteLine(largerValue);