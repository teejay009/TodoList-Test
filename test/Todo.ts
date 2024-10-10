import { loadFixture } from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { expect } from "chai";
import hre from "hardhat";


describe("Message Test", function () {
    async function deployTodoFixture() {
      // Contracts are deployed using the first signer/account by default
      const [owner, otherAccount] = await hre.ethers.getSigners();
  
      const Todo = await hre.ethers.getContractFactory("TodoList");
      const todo = await Todo.deploy();
  
      return { todo, owner, otherAccount };
    }
  
    describe("deployment", () => {
      it("should check if it deployed", async function () {
          const { todo, owner } = await loadFixture(deployTodoFixture);
  
          expect(await todo.owner()).equal(owner);
      })
  
    //   it("should be able to set message",async function () {
    //       const { message, owner } = await loadFixture(deployMessageFixture);
    //       const msg = " Hello world";
  
    //       await message.connect(owner).setMessage(msg);
  
    //       expect(await message.getMessage()).to.equal(msg);
    //   });
  
    });
  });