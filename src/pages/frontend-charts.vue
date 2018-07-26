<template>
<div class="">
    <chart :options="polar">
    </chart>
</div>
</template>

<script>
export default {
    data: function() {
        return {
            polar: {
                title: {
                    text: '树型关系图谱'
                },
                tooltip: {
                    formatter: function(x) {
                        return x.data.des
                    }
                },
                backgroundColor: '#F5F5DC',
                series: [
                    {
                        type: 'graph',
                        layout: 'force',
                        symbolSize: 80,
                        roam: true,
                        edgeSymbol: ['circle', 'arrow'],
                        edgeSymbolSize: [4, 10],
                        edgeLabel: {
                            normal: {
                                textStyle: {
                                    fontSize: 20
                                }
                            }
                        },
                        force: {
                            repulsion: 2500,
                            edgeLength: [10, 50]
                        },
                        draggable: true,
                        itemStyle: {
                            normal: {
                                color: '#4b565b'
                            }
                        },
                        lineStyle: {
                            normal: {
                                width: 2,
                                color: '#4b565b'
                            }
                        },
                        edgeLabel: {
                            normal: {
                                show: true,
                                formatter: function(x) {
                                    return x.data.name
                                }
                            }
                        },
                        label: {
                            normal: {
                                show: true,
                                textStyle: {}
                            }
                        },
                        data: [
                            {
                                name: '1',
                                symbolSize: 100,
                                itemStyle: {
                                    normal: {
                                        color: 'red'
                                    }
                                }
                            },
                            {
                                name: '2',
                                symbolSize: 100,
                                itemStyle: {
                                    normal: {
                                        color: 'red'
                                    }
                                }
                            },
                            {
                                name: '3',
                                symbolSize: 100,
                                itemStyle: {
                                    normal: {
                                        color: 'red'
                                    }
                                }
                            },
                            {
                                name: '1.1',
                                symbolSize: 100,
                                itemStyle: {
                                    normal: {
                                        color: 'red'
                                    }
                                }
                            },
                            {
                                name: '1.2',
                                symbolSize: 100,
                                itemStyle: {
                                    normal: {
                                        color: 'red'
                                    }
                                }
                            },
                            {
                                name: '1.3',
                                symbolSize: 100,
                                itemStyle: {
                                    normal: {
                                        color: 'red'
                                    }
                                }
                            },
                            {
                                name: '2.1',
                                symbolSize: 100,
                                itemStyle: {
                                    normal: {
                                        color: 'red'
                                    }
                                }
                            },
                            {
                                name: '2.2',
                                symbolSize: 100,
                                itemStyle: {
                                    normal: {
                                        color: 'red'
                                    }
                                }
                            },
                            {
                                name: '1.1.1',
                                symbolSize: 100,
                                itemStyle: {
                                    normal: {
                                        color: 'red'
                                    }
                                }
                            },
                            {
                                name: '1.1.2',
                                symbolSize: 100,
                                itemStyle: {
                                    normal: {
                                        color: 'red'
                                    }
                                }
                            },
                            {
                                name: '1.1.3',
                                symbolSize: 100,
                                itemStyle: {
                                    normal: {
                                        color: 'red'
                                    }
                                }
                            },
                            {
                                name: '0',
                                symbolSize: 100,
                                itemStyle: {
                                    normal: {
                                        color: 'red'
                                    }
                                }
                            }
                        ],
                        links: [
                            {
                                source: '0',
                                target: '1'
                            },
                            {
                                source: '0',
                                target: '2'
                            },
                            {
                                source: '0',
                                target: '3'
                            },
                            {
                                source: '3',
                                target: ''
                            },
                            {
                                source: '1',
                                target: '1.1'
                            },
                            {
                                source: '1',
                                target: '1.2'
                            },
                            {
                                source: '1',
                                target: '1.3'
                            },
                            {
                                source: '2',
                                target: '2.1'
                            },
                            {
                                source: '2',
                                target: '2.2'
                            },
                            {
                                source: '1.1',
                                target: '1.1.1'
                            },
                            {
                                source: '1.1',
                                target: '1.1.2'
                            },
                            {
                                source: '1.1',
                                target: '1.1.3'
                            },
                            {
                                source: '',
                                target: ''
                            },
                            {
                                source: '',
                                target: ''
                            },
                            {
                                source: '',
                                target: ''
                            },
                            {
                                source: '',
                                target: ''
                            },
                            {
                                source: '',
                                target: ''
                            },
                            {
                                source: '',
                                target: ''
                            }
                        ]
                    }
                ]
            }
        }
    }
}
</script>
