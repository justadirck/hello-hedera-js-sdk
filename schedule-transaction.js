console.clear();

//Create a transaction to schedule
const transaction = new TransferTransaction()
     .addHbarTransfer(senderAccount, Hbar.fromTinybars(-1))
     .addHbarTransfer(recipientAccount, Hbar.fromTinybars(1));

//Schedule a transaction
const scheduleTransaction = await new ScheduleCreateTransaction()
     .setScheduledTransaction(transaction)
     .execute(client);

//Get the receipt of the transaction
const receipt = await scheduleTransaction.getReceipt(client);
     
//Get the schedule ID
const scheduleId = receipt.scheduleId;
console.log("The schedule ID is " +scheduleId);

//Get the scheduled transaction ID
const scheduledTxId = receipt.scheduledTransactionId;
console.log("The scheduled transaction ID is " +scheduledTxId);     