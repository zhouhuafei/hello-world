const io = require('./weapp.socket.io.js')

wx.$Page({
  data: {},

  onLoad(options) {
    this.setData(options)
    this.init()
  },
  onHide() {},
  onShow() {},
  onUnload() {
    this.socket.close()
    /*// 微信原生
    wx.closeSocket({
      success: (res) => {
        console.log('wx.closeSocket success', res)
      },
      fail: (res) => {
        console.log('wx.closeSocket fail', res)
      },
      complete: (res) => {
        console.log('wx.closeSocket complete', res)
      }
    })*/
  },

  init() {
    // SDK
    const socket = (this.socket = io('ws://chat.sbxx.top'))
    // 钩子
    socket.on('connect', (data) => {
      console.log('socket.on connect', data)
    })
    socket.on('connect_error', (err) => {
      console.log('socket.on connect_error', err)
    })
    socket.on('connect_timeout', (err) => {
      console.log('socket.on connect_timeout', err)
    })
    socket.on('disconnect', (reason) => {
      console.log('socket.on disconnect', reason)
    })
    socket.on('reconnect', (attemptNumber) => {
      console.log('socket.on reconnect', attemptNumber)
    })
    socket.on('reconnect_failed', (err) => {
      console.log('socket.on reconnect_failed', err)
    })
    socket.on('reconnect_attempt', (attemptNumber) => {
      console.log('socket.on reconnect_attempt', attemptNumber)
    })
    socket.on('error', (err) => {
      console.log('socket.on error', err)
    })
    // 通信
    socket.on('post', (data) => {
      console.log('socket.on post: ', data)
    })
    socket.emit('post', { chatMessage: 'chatMessage1', smallTail: 'smallTail1' })
    /*// 微信原生
    wx.connectSocket({
      url: 'ws://chat.sbxx.top/socket.io/?EIO=3&transport=websocket',
      header: { 'content-type': 'application/json' }
    })
    wx.onSocketOpen((res) => {
      console.log('wx.onSocketOpen', res)
      wx.sendSocketMessage({
        data: '42' + JSON.stringify(['post', { chatMessage: 'chatMessage1', smallTail: 'smallTail1' }])
      })
    })
    wx.onSocketMessage((res) => {
      console.log('wx.onSocketMessage', res)
    })
    wx.onSocketError((res) => {
      console.log('wx.onSocketError', res)
    })
    wx.onSocketClose((res) => {
      console.log('wx.onSocketClose', res)
    })*/
  }
})
