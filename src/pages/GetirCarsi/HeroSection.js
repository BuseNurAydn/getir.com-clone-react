
import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import searchIcon from '../../assets/svg/search.svg';
import crossIcon from '../../assets/svg/crosshair.svg'

const HeroSection = () => {

    const [selected, setSelected] = useState("TR");

    const phones = {
        US: '+1',
        DE: '+50',
        TR: '+90',
        IT: '+7',
        IN: '+15'

    }

    return (
        <div className='md:h-[500px] relative w-full md:bg-carsi flex md:justify-end md:pr-8 md:w-auto'>
            <div className=" flex items-center justify-between md:mr-16 w-full md:mx-auto ">
                <div className='md:w-[400px] rounded-lg bg-gray-color p-6 w-full md:mr-0 md:ml-auto'>
                     {/* "getirçarşı" başlığı */}
                     <div className="bg-brand-color flex items-center justify-center py-4 absolute -top-0 left-1/2 transform -translate-x-1/2 w-full md:w-auto md:hidden">
                     <img 
                     src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTQ3OCIgaGVpZ2h0PSIzMjgiIGZpbGw9Im5vbmUiPjxwYXRoIGQ9Ik0xNDY0LjEzIDIxNS43OGMtMTAuMiAwLTE2Ljg0LTcuNDgtMTYuODQtMTkuNTZ2LTg5LjI4bC4xNy0xOS4wNS41MS0xMS41NmMuMzQtMy4wNi41MS01LjYxLjg1LTcuNDgtMTYuMzMgMC0yOC41NyAzLjQtMzYuOSAxMC4yLTguMzQgNi44LTEyLjU5IDE4LjAzLTEyLjU5IDMzLjg1bC0uMzQgOTAuOThjMCAzMi40OCAyMC45MiA1MC41MSA0Ny4yOCA0OS40OSAxNi42Ny0uNjggMzAuOTUtOC41IDMwLjk1LTI2LjAyIDAtNy4zMS0xLjE5LTEzLjEtMS4xOS0xMy4xLTMuOTEuODUtNi42MyAxLjUzLTExLjkgMS41M3oiIGZpbGw9IiNmZmYiLz48ZyBmaWxsPSIjZmZkMTExIj48cGF0aCBkPSJNMzU1LjM1IDEyNi41YzAtMzcuMjQtMzAuNjEtNjEuNzMtNzUuMTctNjEuNzMtNDIuMzQgMC04Ni43MyAzMC40NC04Ni43MyA5OC4zIDAgNTEuODcgMzEuMjkgOTAuMTMgODUuNTQgOTAuMTMgMzAuNDQgMCA2My45NC0xNy4zNSA3Mi40NS0yOS4yNSAwIDAtNS43OC0yMi4yOC0yMS42LTIyLjI4LTguMzMgMC0xNC40NSAzLjIzLTIxLjI2IDYuMTMtNy4xNCAyLjg5LTE1LjQ3IDUuNDQtMjYuMzYgNS40NC0xNS4xMyAwLTQxLjE2LTYuMTItNDEuMTYtMzguNiAwIDAgMTIuMjQgMy41NyA0MC4xMyAzLjU3IDU5LjctLjE4IDc0LjE2LTI1LjM1IDc0LjE2LTUxLjcxem0tNzMuMy0yMS4yNWMyMC41OCAwIDMwLjQ0IDExLjIyIDMwLjQ0IDIxLjQzIDAgMTIuMDgtMTAuODggMTkuOS0zMC42MSAxOS45LTI4LjU3IDAtMzkuNDYtNC4wOC0zOS40Ni00LjA4LjAxLTE3LjM2IDEzLjYyLTM3LjI1IDM5LjYzLTM3LjI1ek00NjYuNzQgMjEzLjRjLTIwLjU4IDAtMzEuMjktMTcuMzUtMzMuMTYtMjQuODMtMi4wNC03LjQ4LTMuNC0xOC4wMi0zLjQtMjguOTFsLjM0LTU1Ljc4aDE0Ljk2YzEyLjA3IDAgMjEuNDMtMy41NyAyNy44OS0xMC41NCA2LjYzLTcuMTQgOS44Ni0xNi41IDkuODYtMjguNGgtNTIuNzJsLS4zNC0yNC44My4xNy0xOS4wNS41MS0xMS41N2MuMTctMy4wNi41MS01LjYxLjg1LTcuNDgtMTUuOTggMC0yOC4yMyAzLjQtMzYuNTYgMTAuMnMtMTIuNTkgMTguMDMtMTIuNTkgMzMuODRsLS4zNCAxMjMuOGMwIDUwLjY3IDI0LjE1IDgzLjg0IDcwLjI0IDgzLjg0IDIyLjc5IDAgMzkuNDYtMTIuMjQgMzkuNDYtMzAuNzggMC02LjYzLS44NS0xMC4wNC0xLjUzLTEyLjA4LTMuOTIuODctMTEuNCAyLjU3LTIzLjY0IDIuNTd6bTExNS42NCAyLjM4Yy0xMC4yIDAtMTYuODQtNy40OC0xNi44NC0xOS41NnYtODkuMjhsLjE3LTE5LjA1LjUxLTExLjU2Yy4zNC0zLjA2LjUxLTUuNjEuODUtNy40OC0xNi4zMyAwLTI4LjU3IDMuNC0zNi45IDEwLjJzLTEyLjU5IDE4LjAzLTEyLjU5IDMzLjg1bC0uMzQgOTAuOThjMCAzMi40OCAyMC45MiA1MC41MSA0Ny4yOCA0OS40OSAxNi42Ny0uNjggMzAuOTUtOC41IDMwLjk1LTI2LjAyIDAtNy4zMS0xLjE5LTEzLjEtMS4xOS0xMy4xLTMuOTEuODUtNi42MyAxLjUzLTExLjkgMS41M3pNNTI5LjMyIDUxYzMuNzQgMS44NyA3LjgyIDIuODkgMTIuMDcgMi44OSA5Ljg2IDAgMTcuNjgtNC43NiAyMy40Ny0xNC4xMSAyLjM4LTQuMjUgMy41Ny04Ljg0IDMuNTctMTMuNzggMC00LjU5LTEuMDItOC44NC0zLjIzLTEyLjkycy01LjQ0LTcuMTQtOS43LTkuMzVDNTUxLjc2IDEuNTIgNTQ3Ljg1LjUgNTQzLjc3LjVjLTQuNTkgMC05LjAxIDEuMzYtMTMuMjYgMy45MXMtNy42NSA2LjEyLTEwLjAzIDEwLjcxYy0yLjM4IDQuMDgtMy41NyA4LjY4LTMuNTcgMTMuNzcgMCA0LjU5IDEuMDIgOC44NCAzLjIzIDEyLjc1IDIuMDQgMy43NSA1LjEgNi45OCA5LjE4IDkuMzZ6Ii8+PHVzZSB4bGluazpocmVmPSIjQiIvPjwvZz48dXNlIHhsaW5rOmhyZWY9IiNCIiB4PSI0ODguMTUiIGZpbGw9IiNmZmYiLz48cGF0aCBkPSJNODUuODEgNjQuNzdDMzAuMDMgNjQuNzcuNzggMTAzLjg4Ljc4IDE1MS41YzAgNDQuMDQgMjYuODcgODUuMiA3NS42OCA4NS4yIDI1LjM0IDAgMzkuOTYtMTAuNzIgNDMuNy0xMy45NXYyMi4xMWMwIDI1LjM0LTkuODYgNDIuMTctMzUuMzcgNDIuMTctMTIuMjQgMC0yMS40My0zLjQtMjkuOTMtNy4zMS03LjQ4LTMuNTctMTMuMDktNy44Mi0yMC41Ny03LjgyLTE5LjA1IDAtMjQuMzIgMjMuNDctMjQuMTUgMjMuNjQgMTQuMjkgMTguMzcgNDYuOTQgMzEuOTcgNzQuMzEgMzEuOTcgNTMuOTEgMCA4My42Ny0zMS40NiA4My42Ny05My44N3YtNzIuOTVjLS4xOC01Ni45Ny0yNS4zNS05NS45Mi04Mi4zMS05NS45MnptLS4zNCAxMjkuNzZjLTIwLjkyIDAtMzYuOS0xMy4yNi0zNi45LTQyLjM0IDAtMzAuOTUgMTYuMzItNDcuMTEgMzYuOS00Ny4xMSAyMC4yNCAwIDM1LjAzIDEyLjI1IDM1LjAzIDQ0LjczIDAgMzMuMzItMTUuOTkgNDQuNzItMzUuMDMgNDQuNzJ6IiBmaWxsPSIjZmZkMTExIi8+PHBhdGggZD0iTTEwNTEuMzIgODMuMzVjLTYuNzctNi4xNC0xNS4xNS0xMC43OS0yNC45Mi0xMy44NC0xMC4wOS0zLjE0LTIxLjUxLTQuNzQtMzMuOTctNC43NC0xMy4wMSAwLTI0LjM2IDEuMjctMzMuNzIgMy43Ny05LjE3IDIuNDYtMTYuNzYgNS43NS0yMi41NiA5Ljc5LTUuNjEgMy45LTkuNzcgOC4yNC0xMi4zOCAxMi44Ny0yLjU3IDQuNTYtMy44MiA5LjE2LTMuODIgMTQuMDR2MTAuMjVjLjUyLS4zOCAxLjA1LS43NSAxLjU3LTEuMTEgNC4wNS0yLjgzIDguNzMtNS4yNCAxMy45MS03LjE1IDUuMDQtMS44NiAxMS4wMy0zLjM1IDE3LjgxLTQuNDQgNi43My0xLjA4IDE0Ljg4LTEuNjMgMjQuMjItMS42MyAxNC4yNSAwIDI0LjYgMS40IDMxLjY1IDQuMjkgOC42OSAzLjU3IDEzLjQ3IDExLjMxIDEzLjQ3IDIxLjh2MTQuNzZoLTE2LjI1Yy0zMy4yNCAwLTU3LjYgNS03Mi4zOSAxNC44NS0xNC4xIDkuNC0yMC45NSAyMy4yNC0yMC45NSA0Mi4zMSAwIDkuNjEgMi4xMyAxNy40NyA2LjUgMjQuMDMgNC41MyA2Ljc5IDEwLjM3IDEyLjQzIDE3LjM4IDE2Ljc2IDcuMjQgNC40NyAxNS40IDcuODIgMjQuMjcgOS45NSA5LjA3IDIuMTggMTguMDcgMy4yOSAyNi43NSAzLjI5IDE2Ljc4IDAgMzAuOTMtMS4zNCA0Mi4wOC0zLjk5IDEwLjQ2LTIuNDggMTguOTQtNi43NyAyNS4yMS0xMi43MyA2LjIyLTUuOTIgMTAuNzMtMTQuMDggMTMuNC0yNC4yNiAyLjg1LTEwLjg3IDQuMy0yNC44NiA0LjMtNDEuNTh2LTI5LjU3YzAtMTMuMi0xLjk0LTI0Ljc2LTUuNzctMzQuMzMtMy43NC05LjQxLTkuMDYtMTcuMjgtMTUuNzktMjMuMzl6bS0yNy4zMyAxMDcuMTJjMCAxMS4wMy0zLjEzIDE5LTkuMzEgMjMuNzItNS42MSA0LjI4LTEyLjI4IDYuNDUtMTkuODEgNi40NS0xMC45NSAwLTE4Ljg2LTItMjQuMi02LjEyLTMuOTktMy4wOC04Ljc2LTguOTEtOC43Ni0xOS4xNyAwLTguOTcgNC4wMi0xNi4wMiAxMS42Mi0yMC4zOCA2LjU3LTMuNzcgMTYuNS01LjYxIDMwLjM4LTUuNjFoMjAuMDh2MjEuMTF6bS0xOTAuODIgNzguMjJjLTMuNzQtMi4yMS03LjY1LTMuMjMtMTEuNzMtMy4yMy00LjU5IDAtOS4wMSAxLjM2LTEzLjI2IDMuOTFzLTcuNjUgNi4xMi0xMC4wMyAxMC43MWMtMi4zOCA0LjA4LTMuNTcgOC42Ny0zLjU3IDEzLjc3IDAgNC41OSAxLjAyIDguODQgMy4yMyAxMi43NSAyLjA0IDMuNzQgNS4xIDYuOTggOS4xOSA5LjM1IDMuNzQgMS44NyA3LjgyIDIuODkgMTIuMDcgMi44OSA5Ljg2IDAgMTcuNjktNC43NiAyMy40Ny0xNC4xMWEyNy43MiAyNy43MiAwIDAgMCAzLjU3LTEzLjc3YzAtNC41OS0xLjAyLTguODQtMy4yMy0xMi45My0yLjIzLTQuMDctNS40Ni03LjEzLTkuNzEtOS4zNHptLTI3LjUyLTE0OS40MmMxMC4wMi04LjgyIDI0LjIzLTEzLjI5IDQyLjI0LTEzLjI5IDEwLjA4IDAgMTkuNjMgMS41NCAyOC4zOCA0LjU5YTk1LjIgOTUuMiAwIDAgMSA0Ljk3IDEuODhjMi4wNC44NCA0LjI2LS42NiA0LjI2LTIuODZ2LTYuODZjMC01LjE4LTEuMTYtOS44NC0zLjU0LTE0LjIyLTIuNDctNC41My01Ljk0LTguNi0xMC4zMi0xMi4wOS00LjUyLTMuNTktOS44LTYuNDYtMTUuNjktOC41My01LjktMi4wNy0xMi4zOS0zLjExLTE5LjI3LTMuMTEtMTYuMDYgMC0zMC40NCAyLjU5LTQyLjc0IDcuNzEtMTIuMjYgNS4xLTIyLjY4IDEyLjA1LTMwLjk3IDIwLjY3LTguMzEgOC42My0xNC43IDE4LjgtMTkuMDIgMzAuMjUtNC4zNiAxMS41NC02LjU2IDIzLjkzLTYuNTYgMzYuODIgMCAxNC4wMSAyLjMxIDI2Ljk1IDYuODggMzguNDYgNC41MiAxMS40MiAxMC45NCAyMS4yMyAxOS4wNyAyOS4xNCA4LjE3IDcuOTYgMTguMDcgMTQuMjQgMjkuNDEgMTguNjYgMS45OC43NyA0LjAxIDEuNDcgNi4wNyAyLjA5IDcuNSAyLjI1IDEzLjczIDMuNDggMjMuMTcgNC4yOSAyLjg2LjI0IDUuNzcuMzMgOC43My4zMyA4LjEgMCAxNS42My0xLjEyIDIyLjM4LTMuMzQgNi42Ny0yLjE5IDEyLjQ1LTUuMTcgMTcuMTctOC44NiA0LjYzLTMuNjIgOC4zNC03Ljg5IDExLjAzLTEyLjY3IDIuNTktNC42IDMuODUtOS4zNCAzLjg1LTE0LjQ5di00LjljMC0yLjEzLTIuMS0zLjYyLTQuMTEtMi45MWExMDIuNzcgMTAyLjc3IDAgMCAxLTcuNjggMi4zOGMtNy45IDIuMTQtMTcuNTMgMy4yMi0yOC42MiAzLjIyLTE2LjQ0IDAtMjkuNzUtNC41Ni0zOS41NC0xMy41Ni05Ljk3LTkuMTUtMTUuMDMtMjMuMTktMTUuMDMtNDEuNzItLjAxLTE1LjU2IDUuMi0yOC4wMyAxNS40OC0zNy4wOHptNTA1Ljc3IDE0OS40MmMtMy43NC0yLjIxLTcuNjUtMy4yMy0xMS43My0zLjIzLTQuNTkgMC05LjAyIDEuMzYtMTMuMjcgMy45MXMtNy42NSA2LjEyLTEwLjAzIDEwLjcxYy0yLjM4IDQuMDgtMy41NyA4LjY3LTMuNTcgMTMuNzcgMCA0LjU5IDEuMDIgOC44NCAzLjIzIDEyLjc1IDIuMDQgMy43NCA1LjEgNi45OCA5LjE5IDkuMzUgMy43NCAxLjg3IDcuODIgMi44OSAxMi4wNyAyLjg5IDkuODYgMCAxNy42OS00Ljc2IDIzLjQ3LTE0LjExYTI3LjcyIDI3LjcyIDAgMCAwIDMuNTctMTMuNzdjMC00LjU5LTEuMDItOC44NC0zLjIzLTEyLjkzLTIuMjItNC4wNy01LjQ1LTcuMTMtOS43LTkuMzR6bTQ2LTEwOC4zMWMtOC44LTcuOTYtMjAuNjQtMTMuMTgtMzUuMjEtMTUuNS05Ljk4LTEuNjItMTguMS0zLjEtMjQuMTMtNC40LTYuMzItMS4zNi0xMS4wMy0yLjY1LTE0LjM4LTMuOTUtNC41Mi0xLjc0LTcuNC0zLjc2LTkuMDQtNi4zNC0xLjUyLTIuMzgtMi4yOS01LjItMi4yOS04LjM4IDAtNC40MiAxLjc2LTEwLjc5IDEwLjE2LTE2LjA0IDUuODctMy42NyAxNS4xOS01LjM4IDI5LjMyLTUuMzggMTMuNTYgMCAyNS43NCAxLjYyIDM2LjIgNC44MSA2LjQgMS45NiAxMi4yMSA0LjI4IDE3LjM2IDYuOTR2LTguNzJjMC0xMi4wMS00LjktMjEuMTEtMTQuOTktMjcuOC0xMC44NC03LjE5LTI2LjM5LTEwLjg0LTQ2LjIxLTEwLjg0LTEwLjIgMC0yMC4zMyAxLjM4LTMwLjEgNC4wOS05LjYxIDIuNjctMTguMzEgNi43Mi0yNS44NCAxMi4wMi03LjM3IDUuMTktMTMuMzYgMTEuNy0xNy44MSAxOS4zNy00LjM0IDcuNDYtNi41NCAxNi40Ny02LjU0IDI2Ljc2IDAgMTMuNCAzLjU5IDIzLjIyIDEwLjk4IDMwLjAzIDcuNzIgNy4xMSAxOS42OSAxMS45IDM1LjU0IDE0LjIyIDEwLjAxIDEuNCAxOC4wOSAyLjcxIDI0LjAxIDMuODkgNi4zOCAxLjI4IDExLjIgMi43IDE0LjcyIDQuMzIgNC4zNiAyLjAyIDcuMyA0LjQxIDguOTggNy4zNCAxLjUyIDIuNjYgMi4yOCA1LjY3IDIuMjggOC45NCAwIDQuOTYtMS43NiAxMS45LTEwLjEzIDE2LjgzLTUuNzEgMy4zNy0xNC43IDQuOTQtMjguMyA0Ljk0LTE0LjM1IDAtMjYuODMtMS43Ni0zNy4wNy01LjIyLTYuMDgtMi4wNS0xMS41OS00LjQtMTYuNDktNy4wMnY3LjgzYzAgNS45NyAxLjA5IDExLjQ2IDMuMjQgMTYuMzQgMi4wNyA0LjcxIDUuMzEgOC42MiA5LjkyIDExLjk4IDQuODMgMy41MiAxMS40IDYuMzYgMTkuNTMgOC40NSA0LjM2IDEuMTIgOS4zIDEuODYgMTQuNzIgMi40OCA2LjcxLjc3IDEzLjA0IDEuMDkgMjMuMTEuNjIgMjEuNTYtMS4wMiAzOC43NS02LjQxIDUxLjEzLTE2LjM5IDEzLjM1LTEwLjc2IDE5Ljg0LTI1LjAzIDE5Ljg0LTQzLjYyLS4wMS0xNC4zMi00LjEtMjQuOTgtMTIuNTEtMzIuNnoiIGZpbGw9IiNmZmYiLz48ZGVmcyA+PHBhdGggaWQ9IkIiIGQ9Ik03MDAuNTcgNjkuMTljLTEwLjAzIDAtMjAuMDcgMS4xOS0zMC4xIDMuNHMtMTkuMjIgNi40Ni0yNy4zOCAxMi43NS0xNC44IDE0Ljk2LTE5Ljg5IDI2LjE5Yy01LjEgMTEuMjItNy42NSAyNS41MS03LjY1IDQzLjAydjUxLjE5YzAgMTUuODIgMi4wNCAzMC40NCAxMS41NiAzNy41OCAxMC4zOCA3LjgyIDIyLjQ1IDguMTYgMzguNDMgOC4xNi0uMzQtMS41My0uNTEtNi4xMi0uODUtOS4xOS0uMzQtMi44OS0uNTEtNi44LS41MS0xMS41Ni0uMTctNC45My0uMTctMTEuMjItLjE3LTE5LjA1di02NS42NGMwLTE1LjQ3IDIuNTUtMzUuMzcgMjkuNzYtMzcuNTggMTUuMzEtMS4zNiAyOC45MS03LjE0IDI4LjkxLTIzLjgxIDAtMy45MS0uODUtMTEuMjItMi43Mi0xNS40N2gtMTkuMzl2LjAxeiIvPjwvZGVmcz48L3N2Zz4=" alt="GetirÇarşı"
                     className="h-5"></img>
                     </div>
                    <div className='flex items-center mt-20 md:mt-0'>
                        <label className='flex-1 relative block cursor-pointer'>
                            <img
                                src={searchIcon}
                                alt="Search Icon"
                                className="absolute left-5 top-1/2 transform -translate-y-1/2 w-4 h-4"
                            />
                            <input
                                placeholder="Sokağını veya posta kodunu arat"
                                required
                                className="h-14 px-12 border-2 border-gray-300 rounded w-full text-sm transition-colors hover:border-brand-color outline-none peer"
                            />
                        </label>
                        <button
                            className="md:right-32 absolute right-8 md:px-4 px-2 py-2 bg-gray-color rounded-lg text-sm font-semibold hover:bg-brand-dark transition-colors flex items-center space-x-2">
                            <img
                                src={crossIcon}
                                alt="Button Icon"
                                className="w-4 h-4"
                            />
                            <span className="text-brand-color hidden md:block">Konumumu bul</span>
                        </button>
                    </div>
                    <div className=" relative flex items-center border-b-2 my-4 md:my-8 divide-slate-400 w-full">
                        <span className="absolute bg-gray-color ml-36 text-sm px-4 font-semibold text-slate-500 hidden md:block">veya</span>
                    </div>
                    <h3 className='text-brand-color text-center font-semibold m-4'>Giriş yap veya kayıt ol</h3>
                    <div className="flex gap-x-2">
                        <ReactFlagsSelect
                            countries={Object.keys(phones)}
                            customLabels={phones}
                            selected={selected}
                            onSelect={code => setSelected(code)}
                            className="flag-select"
                        />
                        <label className='flex-1 relative block cursor-pointer'>
                            <input required className="h-14 px-4 border-2 border-gray-300 rounded text-sm pt-2 transition-colors hover:border-brand-color outline-none peer w-full"/>
                            <span className="absolute top-0 left-0 h-full flex items-center px-4 text-sm transition-all text-gray-500 peer-focus:h-8 peer-focus:text-brand-color peer-focus:text-xs peer-valid:h-8 peer-valid:text-brand-color peer-valid:text-xs" >Telefon Numarası</span>
                        </label>
                    </div>
                    <button className="bg-yellow-color rounded-md mt-3 flex items-center justify-center w-full h-12 font-semibold text-sm text-brand-color hover:bg-brand-color hover:text-yellow-color transition-colors">Telefon numarası ile devam et</button>

                </div>
            </div>
        </div>
    )
}
export default HeroSection;
