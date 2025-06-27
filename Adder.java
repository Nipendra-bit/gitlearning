/*class Adder
{
	public static void main(String[] args)
	{
		int a=9,b=8,sum;
		sum=a+b;
		System.out.println("The sum of"+a+"&"+b+"is"+sum);
	}
}*/
import java.util.*;
class Adder
{
	public static void main(String[] args)
	{
		int a,b,sum;
		Scanner sc;
		sc=new Scanner(System.in);
		System.out.print("Enter the two numbers");
		a=sc.nextInt();
		b=sc.nextInt();
		sum=a+b;
		System.out.println(sum);
	}
}

