import { NextResponse } from 'next/server';
import Razorpay from 'razorpay';

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID || 'rzp_test_S5E4EoiNrboy8m',
  key_secret: process.env.RAZORPAY_KEY_SECRET || '6oxtRVdHOMOMHcsVUqIFHeB2',
});

export async function POST() {
  try {
    const options = {
      amount: 10000,
      currency: 'INR',
      receipt: `receipt_${Date.now()}`,
      payment_capture: 1,
    };

    const order = await razorpay.orders.create(options);
    return NextResponse.json(order);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create order' }, { status: 500 });
  }
}
